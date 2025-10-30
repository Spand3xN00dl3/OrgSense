from pydantic import BaseModel

class EventInfo(BaseModel):
  name: str
  description: str
  date: str

class Event(BaseModel):
  id: str
  name: str
  description: str
  date: str
