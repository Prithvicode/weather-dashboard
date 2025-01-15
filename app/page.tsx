

import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/Sidebar";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        
      </div>
    </div>
  );
}
