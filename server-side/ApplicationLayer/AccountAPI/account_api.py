from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from BusinessLayer.AccountFunction.account_handler import register_user, user_login, user_account
from DataLayer.database_handler import get_db
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema, UserDetailsSchema
from BusinessLayer.AccountFunction.authenticator import AuthHandler

_auth_handler = AuthHandler()

router = APIRouter()


@router.post("/signup")
async def signup(email: AccountBaseSchema, password: PasswordBaseSchema, _db: Session = Depends(get_db)):
    return register_user(account_info=email, password_info=password, _db=_db)


@router.post("/login")
async def signin(account_info: UserDetailsSchema, _db: Session = Depends(get_db)):
    return user_login(account_info=account_info, _db=_db)


@router.get("/account")
async def account():
    return user_account()
