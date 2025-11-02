from fastapi import FastAPI, Body
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import json
from models.event_model import Event, EventInfo
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],   # GET, POST, PUT, DELETE, etc
    allow_headers=["*"],   # Authorization, Content-Type, etc
)

@app.get("/")
def root():
  return {"message": "root"}

@app.get("/events")
def get_events():
  with open("data/events.json", "r") as f:
    data = json.load(f)
  
  return {"status": "success", "data": data}

@app.get("/events/{event_id}")
def get_event_details(event_id: str):
  with open("data/events.json", "r") as f:
    data = json.load(f)
  
  selected_event = None

  for event in data:
    if event["id"] == event_id:
      selected_event = event
  
  if selected_event is None:
    return JSONResponse(status_code=404, content={"status": "failed", "message": f"event with id '{event_id}' not found"})

  return {"status": "success", "data": selected_event}

@app.post("/events/create")
def create_event(event_info: EventInfo):
  with open("data/events.json", "r") as f:
    data = json.load(f)
  
  event = {
    "id": str(uuid.uuid4()),
    "name": event_info.name,
    "description": event_info.description,
    "date": event_info.date
  }
  data.append(event)

  with open("data/events.json", "w") as f:
    json.dump(data, f, indent=4)
  
  return {"status": "success"}

if __name__=='__main__':
  import uvicorn
  uvicorn.run("main:app", host="127.0.0.1", port=3001, reload=True)
