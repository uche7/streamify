import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MusicIcon from "@/assets/images/dashboard/music.svg";
import { SidebarList } from "./sidebar-list";

/** Dashboard SideBar */
export const Sidebar = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  /** Desktop View */
  const desktopView = () => {
    return (
      <div
        className={`min-h-screen ${
          isOpen ? "w-[260px]" : "w-20"
        } bg-[#80808080] rounded-[20px] ml-2 my-4 TabletScreen:hidden MobileScreen:hidden transition-all duration-300`}
      >
        <div className="relative flex gap-2 p-[40px]">
          <h3 className="font-streamifyCabinetGrotesk font-[600] text-[26px] text-streamifty-yellow">
            St<span className="text-pink-400">re</span>a
            <span className="text-pink-400">mi</span>
            <span className="text-purple-800">fy</span>
          </h3>
          <Image src={MusicIcon} className="text-white" alt={"Music FIcon"} />
          {/* <button onClick={toggleSidebar} className="text-xl absolute -right-3">
            <Image
              src={isOpen ? ArrowLeftIcon : ArrowRightIcon}
              alt={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            />
          </button> */}
        </div>
        <aside className="mt-[65.43px]" onClick={() => setIsOpen(true)}>
          <SidebarList isOpen={isOpen} />
        </aside>
      </div>
    );
  };

  /** Tablet and Mobile View */
  const tabletmobileView = () => {
    return (
      <>
        {openMenu && (
          <div
            ref={sidebarRef}
            className="min-h-screen w-[260px] z-[2000] absolute bg-[#09090b] DesktopScreen:hidden  transition-all duration-300"
          >
            <div className="relative flex flex-col p-[40px]">
              <h3 className="font-streamifyCabinetGrotesk font-[600] text-[26px] text-streamifty-yellow">
                St<span className="text-pink-400">re</span>a
                <span className="text-pink-400">mi</span>
                <span className="text-purple-800">fy</span>
              </h3>
            </div>
            <aside className="mt-[65.43px]">
              <SidebarList />
            </aside>
          </div>
        )}
      </>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletmobileView()}
    </section>
  );
};
