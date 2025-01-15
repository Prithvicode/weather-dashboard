

"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";




interface DateTime {
  monthYear: string;
  dayTime: string;
}

const Navbar: React.FC = () => {
  const [dateTime, setDateTime] = useState<DateTime>({
    monthYear: "",
    dayTime: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const optionsMonthYear: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
      };
      const monthYear = now.toLocaleDateString("en-US", optionsMonthYear);

      const optionsDayTime: Intl.DateTimeFormatOptions = {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      };
      const dayTime = now.toLocaleDateString("en-US", optionsDayTime);

      setDateTime({ monthYear, dayTime });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 gap-10">
      <div className="flex flex-col">
        <span className="text-lg font-medium">{dateTime.monthYear}</span>
        <span className="text-sm text-gray-600">{dateTime.dayTime}</span>
      </div>

      <div className="relative w-80 flex gap-4">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </span>
        <Input
          placeholder="Search location here"
          name="search"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Navbar;
