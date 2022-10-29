from pydantic import BaseModel
from datetime import datetime as dt


class Password_Model(BaseModel):

    pass_id: int
    ac_id: str
    password_hash: str
    pass_salt: str
    created_at: dt = dt.now()
    updated_at: dt = dt.now()
    created_by: int
    updated_by: int
