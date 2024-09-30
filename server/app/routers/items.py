from fastapi import APIRouter
from app.models.item import Item

router = APIRouter()

@router.get("/items/")
async def read_items():
    return [{"name": "item1"}, {"name": "item2"}]

@router.post("/items/")
async def create_item(item: Item):
    return {"name": item.name, "description": item.description}
