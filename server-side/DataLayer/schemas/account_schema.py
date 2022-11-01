from pydantic import BaseModel
from typing import Optional, List
from DataLayer.schemas.mixin_schema import CreatedAt


class AccountBaseSchema(BaseModel):

    email: str
    username: Optional[str]

    class Config:
        orm_mode = True


class AccountCreateSchema(CreatedAt, AccountBaseSchema):
    ac_id: int
    is_active: bool
    is_email_verified: bool
    ext_login_id: Optional[str]

    class Config:
        orm_mode = True
