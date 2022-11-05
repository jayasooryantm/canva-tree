from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from BusinessLayer.AccountFunction.authenticator import AuthHandler
from DataLayer.AccountData.account_data_handler import add_account_details, get_user_by_email
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema, UserDetailsSchema


_auth_handler = AuthHandler()


def register_user(account_info: AccountBaseSchema, password_info: PasswordBaseSchema, _db: Session):

    hashed_password = _auth_handler.get_password_hash(
        password_info.password_hash)
    password_info.password_hash = hashed_password
    account_info.username = account_info.email.split("@")[0]

    return add_account_details(account_info, password_info, _db)


def user_login(account_info: UserDetailsSchema, _db: Session):
    user = get_user_by_email(account_info, _db)
    if (user is None) or (not _auth_handler.verify_password(account_info.password_hash, user.password_hash)):
        raise HTTPException(
            status_code=401, detail='Invalid username and/or password')
    token = _auth_handler.encode_token(user.email)
    return {'token': token}


def user_account():
    email = Depends(_auth_handler.auth_wrapper)
    return {"message": f"Hi {email}, Welcome to the home page"}
