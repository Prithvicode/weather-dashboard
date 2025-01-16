import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/Sidebar";
import WeatherMain from "@/components/WeatherMain";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen ">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <WeatherMain city="London" />
      </div>
    </div>
  );
}
