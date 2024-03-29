
# python libraries
import string
import random
from datetime import datetime as dt
import pytz
# fastapi libraries
from sqlalchemy.orm import Session
from DataLayer.FastAPISchemas.Schemas import AccountBaseSchema, PasswordBaseSchema, UserDetailsSchema
from DataLayer.SQLModels.Models import Account_Model, Password_Model
from DataLayer.database_handler import get_db


def password_salt_generator(size=32, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def get_user_by_email(account: UserDetailsSchema, _db: Session):
    try:
        _account = _db.query(Account_Model).filter(
            Account_Model.email == account.email).first()
        _password = _db.query(Password_Model).filter(
            Password_Model.ac_id == _account.id).first()
        user_details = UserDetailsSchema(id=_account.id,
                                         email=_account.email,
                                         password_hash=_password.password_hash)
    except Exception as e:
        print(f"Error: {e}")
        user_details = None
    return user_details


def add_account_details(account: UserDetailsSchema,
                        _db: Session) -> dict:

    new_account = Account_Model(
        username=account.username,
        email=account.email,
        is_active=True,
        is_email_verified=False,
        created_at=dt.now(tz=pytz.timezone("Europe/London")),
        updated_at=dt.now(tz=pytz.timezone("Europe/London"))

    )
    new_password = Password_Model(
        password_hash=account.password_hash,
        pass_salt=password_salt_generator(),
        created_at=dt.now(tz=pytz.timezone("Europe/London")),
        updated_at=dt.now(tz=pytz.timezone("Europe/London")),
    )

    new_account.password = new_password

    try:
        _db.add(new_account)
        _db.commit()
        _db.refresh(new_account)
        return {"status": True}
    except Exception as e:
        return {"status": False}
