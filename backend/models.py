from sqlalchemy import Column, Integer, String, Time, Interval
from database import Base

class RailwayData(Base):
    __tablename__ = "railway_data"

    id = Column(Integer, primary_key=True, index=True)
    train_no = Column(String, index=True)
    train_name = Column(String)
    source = Column(String)
    destination = Column(String)
    departure_time = Column(Time)
    arrival_time = Column(Time)
    travel_time = Column(Interval)
    distance = Column(Integer)
