# importing fastapi libraries
from fastapi import APIRouter

# importing application layers
from ApplicationLayer.LandingPage import landing_api


apiRouter = APIRouter()

apiRouter.include_router(landing_api.router, tags=["landing"])
