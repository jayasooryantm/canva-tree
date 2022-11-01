from DataLayer.database_handler import _engine
from DataLayer.models.account_model import Account_Model
from DataLayer.models.password_model import Password_Model

# use it for auto migration
Account_Model.metadata.create_all(_engine)
Password_Model.metadata.create_all(_engine)
