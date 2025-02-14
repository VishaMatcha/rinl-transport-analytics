# Use official Python image as base
FROM python:3.9

# Set working directory in container
WORKDIR /app

# Copy backend files into container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose backend port
EXPOSE 8000

# Start FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
