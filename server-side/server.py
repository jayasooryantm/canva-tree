import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.routes import _api_Router

from DataLayer.SQLModels.Models import *
from DataLayer.database_handler import _engine

Account_Model.metadata.create_all(_engine)
Password_Model.metadata.create_all(_engine)

app = FastAPI()
app.include_router(_api_Router)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
