"use client";

import React, { useState } from "react";
import { Sidebar } from "./components/sidebar";
import DashboardContents from "./components/dashboard-contents";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar openMenu={isOpen} setOpenMenu={setIsOpen} />
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <DashboardContents toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}
