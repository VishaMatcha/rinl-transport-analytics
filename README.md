# 🚆 RINL Transport Analytics
### **Full-Stack Application using FastAPI, PostgreSQL, and React**
![RINL Transport Banner](https://via.placeholder.com/1200x300?text=RINL+Transport+Analytics)

### 📌 **Overview**
RINL Transport Analytics is a **full-stack application** designed to analyze Indian Railway transport data. It provides:
- 📊 **Real-time Train Data**
- ⚡ **FastAPI Backend**
- 🖥️ **React Frontend**
- 🛢️ **PostgreSQL Database**
- 📦 **Dockerized Deployment**

## **📁 Project Structure**

```
rinl-transport-analytics/
│── backend/             # FastAPI Backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── routes.py
│   ├── db_init.py
│── frontend/            # React Frontend
│   ├── src/
│   ├── public/
│── database/            # PostgreSQL Setup
│   ├── schema.sql
│   ├── seed.sql
│── docker-compose.yml   # Docker Configuration
│── README.md            # Documentation
```

## **🚀 Features**
✅ **Real-time train schedule tracking**  
✅ **FastAPI REST API with PostgreSQL**  
✅ **React-based UI with Bootstrap**  
✅ **Data visualization with Plotly Dash**  
✅ **Dockerized for easy deployment**  

## **📌 Setup Instructions**
### **1️⃣ Prerequisites**
Ensure you have the following installed:
- [Python 3.9+](https://www.python.org/)
- [Node.js 16+](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/rinl-transport-analytics.git
cd rinl-transport-analytics
```

### **3️⃣ Set Up the Database**
```bash
psql -U postgres -c "CREATE DATABASE rinl_transport;"
psql -U postgres -d rinl_transport -f database/schema.sql
psql -U postgres -d rinl_transport -f database/seed.sql
```


### **4️⃣ Run the Backend**
Navigate to the backend folder and install dependencies:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend will run at: **http://127.0.0.1:8000**  
Check API Docs: **http://127.0.0.1:8000/docs**

### **5️⃣ Run the Frontend**
Navigate to the frontend folder:
```bash
cd ../frontend
npm install
npm start
```
Frontend will be available at: **http://localhost:3000**

### **6️⃣ (Optional) Run with Docker**
```bash
docker-compose up --build
```
This starts:
- **PostgreSQL**
- **FastAPI Backend**
- **React Frontend**

## **🔗 API Endpoints**
| Method | Endpoint       | Description             |
|--------|---------------|-------------------------|
| `GET`  | `/trains/`    | Fetch all train data   |
| `POST` | `/trains/`    | Add new train record   |
| `GET`  | `/trains/{id}`| Get train by ID        |
