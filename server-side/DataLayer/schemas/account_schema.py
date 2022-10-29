from pydantic import BaseModel
from datetime import datetime as dt


class Account_Model(BaseModel):

    ac_id: int
    username: str
    email: str
    is_active: bool
    is_email_verified: bool
    ext_login_id: str
    created_at: dt = dt.now()
    updated_at: dt = dt.now()
