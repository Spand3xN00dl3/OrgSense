import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-row bg-[#F2F2F4]">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
