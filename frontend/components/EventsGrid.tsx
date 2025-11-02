'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

export default function EventsGrid() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/events');

      if(res.ok) {
        const data = await res.json()

        if(data.status == "success") {
          setEvents(data.data);
          console.log(JSON.stringify(data));
        }
      } else {
        console.log("error fetching events data");
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex-1 grid grid-cols-4 auto-rows-min gap-y-8">
      {events.map((item, i) => (
        <div key={i} className="flex h-36 items-center justify-center">
          <EventItem key={i} id={item.id} name={item.name} desc={item.description} date={item.date} />
        </div>
      ))}
      <div className="flex h-36 items-center justify-center">
        <AddEventItem />
      </div>
    </section>
  );
}

function EventItem({ id, name, desc, date }: { id: string, name: string, desc: string, date: string }) {
  return (
    <Link className="w-72 h-36 border border-[#262626] bg-white rounded-lg pb-4" href={`/home/events/${id}`}>
      <div className="w-full h-10 border-b border-[#A6B7BF] flex flex-row items-center justify-between px-4">
        <p className="font-medium">{name}</p>
        <div className="flex flex-row items-center gap-1">
          <CiCalendarDate size={24} />
          <p>{date}</p>
        </div>
      </div>
      <p className="w-72 h-24 overflow-hidden text-ellipsis p-2 border">{desc}</p>
    </Link>
  );
}

function AddEventItem() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  
  const closePopup = () => {
    router.refresh();
    setShowPopup(false);
  }
  
  return (
    <>
      <button
        className="w-72 h-36 border border-[#262626] bg-white rounded-lg flex items-center justify-center cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        <p>+ Add Event</p>
      </button>
      {showPopup && <AddEventPopup closePopup={() => setShowPopup(false)}/>}
    </>
  );
}

function AddEventPopup({ closePopup }: { closePopup: () => void }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const addEvent = async () => {
    const res = await fetch("http://localhost:3001/events/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name,
        description: desc,
        date
      })
    });
  };

  return (
    <div className="fixed top-0 left-0 z-20 border-5 border-red-500 w-screen h-screen flex items-center justify-center backdrop-blur-sm">
      <div className="w-150 h-100 border bg-blue-500/20 flex flex-col justify-center">
        <button className="border" onClick={closePopup}>
          <p>Close</p>
        </button>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          placeholder="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addEvent}>
          <p>Add Event</p>
        </button>
      </div>
    </div>
  );
}

type EventType = {
  id: string,
  name: string,
  description: string,
  date: string
};
