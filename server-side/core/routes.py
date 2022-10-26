# importing fastapi libraries
from fastapi import APIRouter

# importing application layers
from ApplicationLayer.API import api


apiRouter = APIRouter()

apiRouter.include_router(api.router, tags=["landing"])
