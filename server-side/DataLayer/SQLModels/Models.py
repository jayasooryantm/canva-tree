from sqlalchemy import Integer, String, Boolean, DateTime, Text, Column, ForeignKey
from sqlalchemy.orm import relationship
from DataLayer.database_handler import Base
from DataLayer.SQLModels.mixins import created_at


class Account_Model(created_at, Base):
    __tablename__ = "account_data_tbl"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(15), nullable=True)
    email = Column(String(50), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    is_email_verified = Column(Boolean, default=False, nullable=False)
    ext_login_id = Column(Text, nullable=True)
    password = relationship(
        "Password_Model", back_populates="account", uselist=False)


class Password_Model(created_at, Base):
    __tablename__ = "password_data_tbl"

    id = Column(Integer, primary_key=True, autoincrement=True)
    ac_id = Column(Integer, ForeignKey(
        "account_data_tbl.id"), nullable=False)
    password_hash = Column(Text, nullable=False)
    pass_salt = Column(Text, nullable=False)
    account = relationship("Account_Model", back_populates="password")
