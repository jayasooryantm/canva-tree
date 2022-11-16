
# Fastapi libraries
from DataLayer.database_handler import get_db
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends


router = APIRouter()


@router.post("/create_template")
async def create_template(userid: int, _db: Session = Depends(get_db)):
    return {"link": True}


@router.post("/save_template")
async def save_template(userid: int, template: str, db: Session = Depends(get_db)):
    return {"message": "Template saved successfully"}


@router.get("/load_template")
async def load_template(userid: int, db: Session = Depends(get_db)):
    return {"": ""}
