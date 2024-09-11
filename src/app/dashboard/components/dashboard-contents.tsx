import React from "react";
import { DashboardNavigation } from "./navigation";
import { Dashboardsections } from "./dashboard-section";

/** Dashboards Contents */
function DashboardContents({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <section>
      <div className="sticky top-0 z-[1000]">
        <DashboardNavigation toggleSidebar={toggleSidebar} />
      </div>
      <div>
        <Dashboardsections />
      </div>
    </section>
  );
}

export default DashboardContents;
