import React, { useMemo } from "react";
import Inputs from "@/library/inputs/inputs";
import Image from "next/image";
import ProfileIcon from "@/assets/images/dashboard/profile-icon.svg";
import BarIcon from "@/assets/images/dashboard/bar-icon.svg";
import { navigationIcons } from "./dashboard.dto";
import { useRouter } from "next/navigation";

/** Dashboard Navigation Bar */
export const DashboardNavigation = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  const Router = useRouter();
  const navigationIconsData = useMemo(() => navigationIcons(Router), [Router]);
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden bg-[#09090b] flex flex-row gap-[151px] px-[40px] pt-[24px] pb-[16px]">
        <div className="w-full bg-[#80808080] h-[44px] flex flex-row rounded-[100px]">
          <Image
            className="my-[13px] mx-[24px] cursor-pointer"
            src={ProfileIcon}
            alt={"Profile Icon"}
          ></Image>
          <Inputs
            className="w-full bg-[#80808080] text-[#9ca3af] p-2 border-none rounded-[100px] outline-none"
            Name={"search"}
            inputType={"text"}
            placeholder="Search for your music..."
          ></Inputs>
        </div>
        <div className="flex flex-row gap-[12px]">
          {navigationIconsData.map((item, index) => (
            <Image
              className="cursor-pointer"
              key={index}
              src={item.Icon}
              alt={item.alt}
              width={30}
              onClick={item.route}
            />
          ))}
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tableView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden bg-[#09090b] flex flex-row justify-between py-[13px] px-[24px] shadow-md">
        <h3 className="font-streamifyCabinetGrotesk font-[600] text-[26px] text-streamifty-yellow">
          St<span className="text-pink-400">re</span>a
          <span className="text-pink-400">mi</span>
          <span className="text-purple-800">fy</span>
        </h3>
        <div className="flex flex-row gap-[12px]">
          <Image src={ProfileIcon} alt={"Profile Icon"}></Image>
          <Image
            src={BarIcon}
            alt={"Menu Icon"}
            className="cursor-pointer"
            onClick={toggleSidebar}
          ></Image>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden bg-[#09090b] flex flex-row justify-between py-[13px] px-[24px] shadow-md">
        <h3 className="font-streamifyCabinetGrotesk font-[600] text-[26px] text-streamifty-yellow">
          St<span className="text-pink-400">re</span>a
          <span className="text-pink-400">mi</span>
          <span className="text-purple-800">fy</span>
        </h3>
        <div className="flex flex-row gap-[12px]">
          <Image src={ProfileIcon} alt={"Profile Icon"}></Image>
          <Image
            src={BarIcon}
            alt={"Menu Icon"}
            className="cursor-pointer"
            onClick={toggleSidebar}
          ></Image>
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tableView()}
      {mobileView()}
    </section>
  );
};
