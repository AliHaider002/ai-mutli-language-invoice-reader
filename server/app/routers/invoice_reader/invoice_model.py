from pydantic import BaseModel

class Invoice(BaseModel):
    input_text: str
