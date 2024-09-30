import os 
from PIL import Image
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

def get_gemini_response(input, image, prompt):
    response = model.generate_content([input,image, prompt])
    return response.text