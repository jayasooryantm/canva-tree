from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from BusinessLayer.AccountFunction.account_handler import register_user
from DataLayer.database_handler import get_db
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema

router = APIRouter()


@router.post("/signup")
async def signup(email: AccountBaseSchema, password: PasswordBaseSchema, _db: Session = Depends(get_db)):

    return register_user(account_info=email, password_info=password, _db=_db)
