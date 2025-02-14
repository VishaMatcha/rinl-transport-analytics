CREATE TABLE railway_data (
    id SERIAL PRIMARY KEY,
    train_no VARCHAR(10),
    train_name VARCHAR(100),
    source VARCHAR(50),
    destination VARCHAR(50),
    departure_time TIME,
    arrival_time TIME,
    travel_time INTERVAL,
    distance INT
);
