import Link from "next/link";
import { IconType } from "react-icons";
import { IoHomeOutline, IoCalendarOutline } from "react-icons/io5"

export default function SideBar() {
  const items = [
    {
      content: "Home",
      pathname: "/home",
      icon: IoHomeOutline
    },
    {
      content: "Events",
      pathname: "/home/events",
      icon: IoCalendarOutline
    },
  ];

  return (
    <div className="w-52 h-full bg-white flex flex-col">
      <div className="w-full h-18 flex items-center">
        <p className="w-full text-center text-[#262626]">OrgSense</p>
      </div>
      <nav className="flex-1 flex flex-col">
        {items.map((item, i) => (
          <SideBarItem key={i} content={item.content} pathname={item.pathname} Icon={item.icon} />
        ))}
      </nav>
    </div>
  );
}

function SideBarItem({ content, pathname, Icon }: { content: string, pathname: string, Icon: IconType }) {
  return (
    <div className="w-full h-14 px-4">
      <Link className="w-full h-full rounded-xl hover:bg-[#CCDAE6] flex items-center pl-8" href={pathname}>
        <Icon size={24} />
        <p className="w-full font-sans pl-4">{content}</p>
      </Link>
    </div>
    // <div className="w-full h-14 rounded-xl flex items-center hover:bg-[#CCDAE6]">
    //   <p className={clsx("w-full text-center")}>{content}</p>
    // </div>
  );
}

/*
Color Options:

Text
 - #262626 good blackish color

Card BG
 - #FFFFFF whiter than the background color

Card Border
 - #3EA39E Greenish color, seems like a good accent color
 - #E6F7FF Light Blue color, solid option for accent

 Hover States

 #CCDAE6
 #E6F7FF
*/
