"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const RunningApplications = () => {
  const [processes, setProcesses] = useState<string[]>([]);
  const [referrer, setReferrer] = useState<string>("");
  const processIcons: Record<string, string> = {
    code: "/icons/vs.png",
    brave: "/icons/brave.png",
    postman: "/icons/postman.png",
    "gnome-terminal": "/icons/svgs/neovim.svg",
  };
  const fetchData = async () => {
    const response = await axios.get(`${referrer}/api/pinger`);
    console.log("Received data ", response.data);
    setProcesses(response.data.processes);
  };
  useEffect(() => {
    fetchData();
    setReferrer(document.referrer);
    const interval = setInterval(fetchData, 2);
    return () => clearInterval(interval);
  }, [referrer]);
  return (
    <div className="flex flex-col items-start justify-center  md:w-96 w-80 pl-3 py-2  rounded-md">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-bold">
          Currently running applications
        </span>
        {processes.length == 0 && (
          <span className="opacity-50 text-xs">afk</span>
        )}
        <span
          className={`w-2 h-2 rounded-md ${
            processes.length > 0 ? "bg-green-700  " : "bg-red-800"
          } custom-ping`}
        ></span>
      </div>
      <div className="flex gap-2 mt-2">
        {Object.keys(processIcons).map((process) => (
          <>
            <img
              key={process}
              src={processIcons[process]}
              alt={process}
              className={`w-10 ${
                processes.includes(process) ? "" : "grayscale opacity-50"
              }`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default RunningApplications;
