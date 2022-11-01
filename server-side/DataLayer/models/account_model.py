from sqlalchemy import Integer, String, Boolean, DateTime, Text, Column
from DataLayer.database_handler import Base
from DataLayer.mixins import created_at


class Account_Model(created_at, Base):
    __tablename__ = "account_data_tbl"

    ac_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(15), nullable=True)
    email = Column(String(50), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_email_verified = Column(Boolean, default=False, nullable=False)
    ext_login_id = Column(Text, nullable=True)
