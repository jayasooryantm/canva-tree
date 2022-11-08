from fastapi import APIRouter
router = APIRouter()


@router.get("/greeting")
async def landing():
    return {"message": "This is landing page"}
