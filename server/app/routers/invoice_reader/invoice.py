import uuid
import io
import os
from PIL import Image
from app.models.item import Item
from fastapi import APIRouter, File, Form, UploadFile
from app.utils.invoice_maker import get_gemini_response

IMAGE_DIR = "images/"

router = APIRouter()

@router.post("/invoice/image/upload")
async def create_item(file: UploadFile = File(...)):
    filename = f"{uuid.uuid4()}.jpg"
    
    # Get the directory where images should be saved (relative to the current file)
    file_path = os.path.join(os.path.dirname(__file__), '..', '..', '..', IMAGE_DIR)

    # Ensure that the image directory exists, if not create it
    if not os.path.exists(file_path):
        os.makedirs(file_path)
        
    # Read and save the uploaded file
    content = await file.read()
    
    input_prompts = """
    You are an expert in understanding invoices. We will upload an image of an invoice and you will answer any questions based on the uploaded invoice image.
    """
    
    text = """
    give me all the details written in invoice. if the text is written in other language than english so at the time of answering tell me in english. if the image is not invoice just tell it is not invoice.
    """
    
    image = Image.open(io.BytesIO(content))
    
    # Simulated function to process the content and prompt
    response = get_gemini_response(input_prompts, image, text)
    
    print("consoleCheck",response)
    
    # Return the response along with status
    return {"status": 200, "data": response}