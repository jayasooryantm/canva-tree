
# Fastapi libraries
from BusinessLayer.AccountFunction.authenticator import AuthHandler
from DataLayer.FastAPISchemas.Schemas import UserDetailsSchema
from DataLayer.database_handler import get_db
from BusinessLayer.AccountFunction.account_handler import register_user, user_login, user_account
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, Form

_auth_handler = AuthHandler()

router = APIRouter()


@router.post("/signup")
async def signup(email: str = Form(...), password: str = Form(...), _db: Session = Depends(get_db)):
    account_info = UserDetailsSchema(email=email, password_hash=password)
    return register_user(account_info=account_info, _db=_db)


@router.post("/login")
async def signin(account_info: UserDetailsSchema, _db: Session = Depends(get_db)):
    return user_login(account_info=account_info, _db=_db)


@router.get("/account")
async def account():
    return user_account()
