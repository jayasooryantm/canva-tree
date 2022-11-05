from sqlalchemy.orm import Session
from datetime import datetime as dt
import pytz
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema, UserDetailsSchema
from DataLayer.models.account_model import Account_Model
from DataLayer.models.password_model import Password_Model
from DataLayer.database_handler import get_db


def get_user_by_email(account: UserDetailsSchema, _db: Session) -> UserDetailsSchema:
    try:
        _account = _db.query(Account_Model).filter(
            Account_Model.email == account.email).first()
        _password = _db.query(Password_Model).filter(
            Password_Model.ac_id == _account.ac_id).first()
        user_details = UserDetailsSchema(
            email=_account.email, password_hash=_password.password_hash)
    except Exception as e:
        print(f"Error: {e}")
    return user_details


def add_account_details(account: AccountBaseSchema,
                        password: PasswordBaseSchema,
                        _db: Session) -> dict:

    new_account = Account_Model(
        ac_id=0,
        username=account.username,
        email=account.email,
        is_active=True,
        is_email_verified=False,
        created_at=dt.now(tz=pytz.timezone("Europe/London")),
        updated_at=dt.now(tz=pytz.timezone("Europe/London"))

    )
    new_password = Password_Model(
        pass_id=0,
        ac_id=0,
        password_hash=password.password_hash,
        pass_salt="b76erh76",
        created_at=dt.now(tz=pytz.timezone("Europe/London")),
        updated_at=dt.now(tz=pytz.timezone("Europe/London")),
        created_by=0,
        updated_by=0
    )

    try:
        _db.add(new_account)
        _db.add(new_password)
        _db.commit()
        _db.refresh(new_account)
        _db.refresh(new_password)
        return {"status": True}
    except Exception as e:
        return {"status": False}
