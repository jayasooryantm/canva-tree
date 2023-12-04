# python libraries
from DataLayer.FastAPISchemas.Schemas import AccountBaseSchema, PasswordBaseSchema, UserDetailsSchema
from DataLayer.AccountData.account_data_handler import add_account_details, get_user_by_email
from BusinessLayer.AccountFunction.authenticator import AuthHandler
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException
from random_username.generate import generate_username
# fastapi libraries


_auth_handler = AuthHandler()

# user registration functions


def register_user(account_info: UserDetailsSchema, _db: Session):

    hashed_password = _auth_handler.get_password_hash(
        account_info.password_hash)
    account_info.password_hash = hashed_password
    account_info.username = generate_username(1)[0]

    return add_account_details(account_info, _db)


# user login functions


def user_login(account_info: UserDetailsSchema, _db: Session):
    user = get_user_by_email(account_info, _db)
    if (user is None) or (not _auth_handler.verify_password(account_info.password_hash, user.password_hash)):
        raise HTTPException(
            status_code=401, detail='Invalid username and/or password')
    token = _auth_handler.encode_token(user.id)
    return {'token': token,
            "user": user.id}
