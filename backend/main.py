from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import RailwayData

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to RINL Transport Analytics API"}

@app.get("/trains/")
def get_trains(db: Session = Depends(get_db)):
    trains = db.query(RailwayData).all()
    return trains
