from pydantic import BaseModel
from DataLayer.schemas.mixin_schema import CreatedAtBy


class PasswordBaseSchema(BaseModel):

    password_hash: str

    class Config:
        orm_mode = True


class PasswordCreateSchema(CreatedAtBy, PasswordBaseSchema):
    pass_id: int
    ac_id: str
    pass_salt: str

    class Config:
        orm_mode = True
