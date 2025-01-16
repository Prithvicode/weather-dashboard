"use client";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/Sidebar";
import WeatherMain from "@/components/WeatherMain";
import React, { useState } from "react";

export default function Page() {
  const [city, setCity] = useState("kathmandu");

  const handleSearch = (value: string) => {
    setCity(value); // Update the city based on the search value
  };

  return (
    <div className="flex h-screen pl-6">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar onSearch={handleSearch} />
        <WeatherMain city={city} />
      </div>
    </div>
  );
}
