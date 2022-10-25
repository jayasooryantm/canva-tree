import uvicorn
from fastapi import FastAPI

from core.routes import apiRouter


app = FastAPI()
app.include_router(apiRouter)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
