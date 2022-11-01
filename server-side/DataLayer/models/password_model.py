from sqlalchemy import Integer, String, DateTime, Text, ForeignKey, Column
from DataLayer.database_handler import Base
from DataLayer.mixins import created_at_by


class Password_Model(created_at_by, Base):
    __tablename__ = "password_data_tbl"

    pass_id = Column(Integer, primary_key=True, index=True)
    ac_id = Column(Integer, ForeignKey(
        "account_data_tbl.ac_id"), nullable=False)
    password_hash = Column(Text, nullable=False)
    pass_salt = Column(Text, nullable=False)
