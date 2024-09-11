import React from "react";
import SummaryCard from "./summary-card";
import ReactECharts from "echarts-for-react";
import { userGrowthOptions } from "./user-growth";
import { revenueOptions } from "./revenue";
import { topStreamedSongsOptions } from "./top-streamed-songs";
import RecentStreamsTable from "./recent-streams-table";

export function Dashboardsections() {
  return (
    <div className="m-2 p-4 rounded-lg">
      {/* Summary Cards */}
      <SummaryCard />

      {/* User Growth and Revenue */}
      <div className="flex lg:flex-row flex-col gap-4 mt-12 mb-4">
        <div className="lg:w-[60%] w-full">
          <ReactECharts
            className="bg-streamifty-grey shadow-md p-4 rounded-lg w-full"
            option={userGrowthOptions}
            style={{ height: "400px", width: "100%" }}
            key={JSON.stringify(userGrowthOptions)}
          />
        </div>

        <div className="lg:w-[40%] w-full">
          <ReactECharts
            className="bg-streamifty-grey shadow-md p-4 rounded-lg"
            option={revenueOptions}
            style={{ height: "400px", width: "100%" }}
            key={JSON.stringify(revenueOptions)}
          />
        </div>
      </div>

      {/*Top Streamed Songs */}
      <div className="mb-4 w-full">
        <ReactECharts
          className="bg-streamifty-grey shadow-md p-4 rounded-lg w-full"
          option={topStreamedSongsOptions}
          style={{ height: "500px", width: "100%" }}
          key={JSON.stringify(topStreamedSongsOptions)}
        />
      </div>

      {/* Recent Streams Table */}
      <RecentStreamsTable />
    </div>
  );
}
