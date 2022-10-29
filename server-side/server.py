import uvicorn
from fastapi import FastAPI

from core.routes import _api_Router


app = FastAPI()
app.include_router(_api_Router)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
