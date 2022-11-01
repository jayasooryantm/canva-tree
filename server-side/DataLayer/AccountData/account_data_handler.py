from sqlalchemy.orm import Session
from datetime import datetime as dt
import pytz
from DataLayer.schemas.account_schema import AccountBaseSchema
from DataLayer.schemas.password_schema import PasswordBaseSchema
from DataLayer.models.account_model import Account_Model
from DataLayer.models.password_model import Password_Model
from DataLayer.database_handler import get_db


def add_account_details(account: AccountBaseSchema,
                        password: PasswordBaseSchema,
                        _db: Session):

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
        print("Account created successfully")
        return {"status": True}
    except Exception as e:
        print(f"Error: {e}")
        return {"status": False}
