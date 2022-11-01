from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from BusinessLayer.AccountFunction.authenticator import AuthHandler
from DataLayer.AccountData.account_data_handler import add_account_details
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema

from datetime import datetime as dt
import pytz

_auth_handler = AuthHandler()


def register_user(account_info: AccountBaseSchema, password_info: PasswordBaseSchema, _db: Session):

    hashed_password = _auth_handler.get_password_hash(
        password_info.password_hash)
    password_info.password_hash = hashed_password
    account_info.username = account_info.email.split("@")[0]

    return add_account_details(account_info, password_info, _db)
