from fastapi import APIRouter
router = APIRouter()


@router.get("/")
async def landing():
    return {"message": "This is landing page"}
