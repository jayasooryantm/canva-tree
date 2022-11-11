from datetime import datetime as dt
import pytz

from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.orm import declarative_mixin


@declarative_mixin
class created_at:
    created_at: dt = Column(DateTime(timezone=True),
                            default=dt.now(tz=pytz.utc), nullable=False)
    updated_at: dt = Column(DateTime(timezone=True),
                            default=dt.now(tz=pytz.utc), nullable=False)


@declarative_mixin
class created_at_by:
    created_at: dt = Column(DateTime(timezone=True),
                            default=dt.now(tz=pytz.utc), nullable=False)
    updated_at: dt = Column(DateTime(timezone=True),
                            default=dt.now(tz=pytz.utc), nullable=False)
    created_by: int = Column(Integer, nullable=False)
    updated_by: int = Column(Integer, nullable=False)
