# importing fastapi libraries
from fastapi import APIRouter

# importing api routes
from ApplicationLayer.PagesAPI import pages_api
from ApplicationLayer.AccountAPI import signup_api


_api_Router = APIRouter()

_api_Router.include_router(pages_api.router, tags=["landing"])
_api_Router.include_router(signup_api.router, tags=["account"])
