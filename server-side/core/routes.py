# importing fastapi libraries
from fastapi import APIRouter

# importing api routes
from ApplicationLayer.PagesAPI import pages_api
from ApplicationLayer.AccountAPI import account_api
from ApplicationLayer.WorkspaceAPI import workspace_api


_api_Router = APIRouter()

_api_Router.include_router(pages_api.router, tags=["landing"])
_api_Router.include_router(account_api.router, tags=["account"])
_api_Router.include_router(workspace_api.router, tags=["workspace"])
