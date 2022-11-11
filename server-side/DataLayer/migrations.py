from DataLayer.database_handler import _engine
from DataLayer.SQLModels.Models import *


def CreateTablesMetaData():
    # use it for auto migration
    try:
        Account_Model.metadata.create_all(_engine)
        Password_Model.metadata.create_all(_engine)
        return True
    except Exception as e:
        return False
