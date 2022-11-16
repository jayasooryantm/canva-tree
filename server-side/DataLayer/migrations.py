from DataLayer.database_handler import _engine
from DataLayer.SQLModels.Models import *


def CreateTablesMetaData():
    Account_Model.metadata.create_all(_engine)
    Password_Model.metadata.create_all(_engine)
