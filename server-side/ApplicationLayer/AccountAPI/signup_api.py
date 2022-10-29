from fastapi import APIRouter
from BusinessLayer.AccountFunction import signup_handler

router = APIRouter()


@router.post("/signup")
async def signup():
    return signup_function.register_user()
