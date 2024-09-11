import React from "react";
import Image from "next/image";
import MusicIcon from "@/assets/images/dashboard/music.svg";
import UsersIcon from "@/assets/images/dashboard/users.svg";
import ActiveUsersIcon from "@/assets/images/dashboard/active-users.svg";
import RevnueIcon from "@/assets/images/dashboard/revnue.svg";
import TopArtistsIcon from "@/assets/images/dashboard/top-artists.svg";
import { dashboardData } from "./db";

/** Summary Card */
export default function SummaryCard() {
  return (
    <div className="flex gap-4 overflow-x-auto lg:overflow-x-hidden">
      <div className="bg-[#80808080] flex lg:flex-row flex-col items-center shadow-md rounded-lg lg:p-4 p-3 w-[190px] lg:w-[300px] xl:w-[190px] h-[120px] lg:h-[120px] shrink-0">
        <Image src={UsersIcon} alt={"total Users"} className="h-6 w-6" />
        <div className="lg:ml-4 mt-2 lg:mt-0">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="font-streamifySFProDisplay text-slate-300 text-xl font-bold">
            {dashboardData.metrics.totalUsers}
          </p>
        </div>
      </div>

      <div
        className="bg-[#80808080] flex lg:flex-row flex-col items-center shadow-md 
        rounded-lg lg:p-4 p-3 w-[190px] lg:w-[300px] xl:w-[190px] h-[120px] lg:h-[120px] shrink-0"
      >
        <Image src={ActiveUsersIcon} alt={"active Users"} className="h-6 w-6" />
        <div className="lg:ml-4 mt-2 lg:mt-0">
          <p className="text-sm text-gray-500">Active Users</p>
          <p className="font-streamifySFProDisplay text-slate-300 text-xl font-bold">
            {dashboardData.metrics.activeUsers}
          </p>
        </div>
      </div>

      <div
        className="bg-[#80808080] flex lg:flex-row flex-col items-center shadow-md 
        rounded-lg lg:p-4 p-3 w-[190px] lg:w-[300px] xl:w-[190px] h-[120px] lg:h-[120px] shrink-0"
      >
        <Image src={MusicIcon} alt={"total Streams"} className="h-6 w-6" />
        <div className="lg:ml-4 mt-2 lg:mt-0">
          <p className="text-sm text-gray-500">Total Streams</p>
          <p className="font-streamifySFProDisplay text-slate-300 text-xl font-bold">
            {dashboardData.metrics.totalStreams}
          </p>
        </div>
      </div>

      <div
        className="bg-[#80808080] flex lg:flex-row flex-col items-center shadow-md 
        rounded-lg lg:p-4 p-3 w-[190px] lg:w-[300px] xl:w-[190px] h-[120px] lg:h-[120px] shrink-0"
      >
        <Image src={RevnueIcon} alt={"revenue"} className="h-6 w-6" />
        <div className="lg:ml-4 mt-2 lg:mt-0">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="font-streamifySFProDisplay text-slate-300 text-xl font-bold">
            ${dashboardData.metrics.revenue}
          </p>
        </div>
      </div>

      <div
        className="bg-[#80808080] flex lg:flex-row flex-col items-center shadow-md 
        rounded-lg lg:p-4 p-3 w-[190px] lg:w-[300px] xl:w-[190px] h-[120px] lg:h-[120px] shrink-0"
      >
        <Image src={TopArtistsIcon} alt={"top Artist"} className="h-6 w-6" />
        <div className="lg:ml-4 mt-2 lg:mt-0">
          <p className="text-sm text-gray-500">Top Artist</p>
          <p className="font-streamifySFProDisplay text-slate-300 text-xl font-bold">
            {dashboardData.metrics.topArtist}
          </p>
        </div>
      </div>
    </div>
  );
}
