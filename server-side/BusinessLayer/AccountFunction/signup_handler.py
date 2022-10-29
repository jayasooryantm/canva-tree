from fastapi import Depends, HTTPException
from DataLayer.schemas.account_schema import Account_Model
from DataLayer.schemas.password_schema import Password_Model
from BusinessLayer.AccountFunction.authenticator import AuthHandler

_auth_handler = AuthHandler()


def register_user(email: str, password: str):

    hashed_password = _auth_handeler.get_password_hash(password)
    new_account = Account_Model(
        ac_id=0,
        username="jabesh.jabalpur",
        email=email,
        is_active=True,
        is_email_verified=False,
        ext_login_id="",
        created_at=dt.now(),
        updated_at=dt.now()

    )
    new_password = Password_Model(
        pw_id=0,
        ac_id=0,
        password=hashed_password,
        created_at=dt.now(),
        updated_at=dt.now()
    )

    return config.auth_token["sign_up"]
