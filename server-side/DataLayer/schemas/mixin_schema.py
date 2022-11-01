from pydantic import BaseModel
from datetime import datetime as dt


class CreatedAt(BaseModel):
    created_at: dt
    updated_at: dt

    class Config:
        orm_mode = True


class CreatedAtBy(CreatedAt):
    created_by: int
    updated_by: int

    class Config:
        orm_mode = True
