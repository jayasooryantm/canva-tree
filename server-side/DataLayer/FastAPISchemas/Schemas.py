from pydantic import BaseModel
from DataLayer.FastAPISchemas.mixin_schema import CreatedAt


# Account Schemas
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


# Password Schemas
class PasswordBaseSchema(BaseModel):

    password_hash: str

    class Config:
        orm_mode = True


class UserDetailsSchema(PasswordBaseSchema):

    email: str
    username: str | None = None

    class Config:
        orm_mode = True


class PasswordCreateSchema(CreatedAt, PasswordBaseSchema):
    pass_id: int
    ac_id: int
    pass_salt: str

    class Config:
        orm_mode = True
