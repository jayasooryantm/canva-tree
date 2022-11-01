from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from core.config import database_config


_database_url = database_config["url"]
_engine = create_engine(_database_url, future=True)
_localsession = sessionmaker(
    autocommit=False, autoflush=False, bind=_engine, future=True)
Base = declarative_base()


def get_db():
    db = _localsession()
    try:
        yield db
    finally:
        db.close()
