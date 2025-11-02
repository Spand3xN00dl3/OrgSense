import EventsGrid from "@/components/EventsGrid";


export default function EventsPage() {
  return (
    <div className="w-full h-full px-6 flex flex-col gap-6">
      <div className="w-full h-16 flex items-center">
        <p className="text-3xl font-sans font-medium">Events</p>
      </div>
      <section className="flex-1 flex flex-col">
        <div className="w-full h-12">
          <input
            className="w-64 h-12 rounded-full pl-4 bg-[#CCDAE6] text-[#262626]"
            placeholder="search for events..."
          />
        </div>
        <div className="w-full border border-[#3EA39E] my-4" />
        <EventsGrid />
      </section>
    </div>
  );
}
