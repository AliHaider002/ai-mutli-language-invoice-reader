from fastapi import FastAPI
from app.routers import items
from app.routers.invoice_reader import invoice
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",  # Frontend on localhost
    "https://your-frontend-domain.com",  # Another domain if necessary
]

# Add CORSMiddleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow specific origins
    allow_credentials=True,  # Allow cookies and credentials
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, PUT, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include routers for different modules
app.include_router(items.router)
app.include_router(invoice.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Movies Recommender System!"}
