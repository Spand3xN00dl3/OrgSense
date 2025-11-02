import BackButton from "@/components/BackButton";
import DeleteEventButton from "@/components/DeleteEventButton";
import { CiCalendarDate } from "react-icons/ci";

export default async function EventSpecificPage({
  params
}: {
  params: Promise<{ eventid: string }>
}) {
  let name = "Sample Event";
  let date = "10/25/2025";
  let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  const { eventid } = await params;
  const res = await fetch(`http://localhost:3001/events/${eventid}`);

  if(res.ok) {
    const data = await res.json();
    name = data.data.name;
    description = data.data.description;
    date = data.data.date;
  } else {
    name = "not found";
    date = "na";
    description = "couldn't find event"
  }


  return (
    <div className="w-full h-full flex flex-col px-6">
      <div className="w-full flex justify-end">
        <BackButton />
      </div>
      <div className="flex-1 flex flex-col">

        <div className="w-full flex flex-row">
          <div className="flex-1">
            <p className="text-3xl font-sans font-medium">{name}</p>
            <div className="flex flex-row gap-2">
              <CiCalendarDate size={24} />
              <p>{date}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DeleteEventButton />
          </div>
        </div>

        <div className="w-full border border-[#3EA39E] my-4" />
        <p className="text-[#262626] font-sans px-4">{description}</p>
        <div className="w-full border border-[#3EA39E] my-4" />
      </div>
    </div>
  );
}
