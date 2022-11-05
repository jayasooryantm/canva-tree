from pydantic import BaseModel
from DataLayer.schemas.mixin_schema import CreatedAt


class AccountBaseSchema(BaseModel):

    email: str
    username: str | None = None

    class Config:
        orm_mode = True


class AccountCreateSchema(CreatedAt, AccountBaseSchema):
    ac_id: int
    is_active: bool
    is_email_verified: bool
    ext_login_id: str | None = None

    class Config:
        orm_mode = True
