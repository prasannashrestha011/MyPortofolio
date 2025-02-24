"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const RunningApplications = () => {
  const [processes, setProcesses] = useState<string[]>([]);
  const [referrer,setReferrer]=useState<string>("")
  const processIcons: Record<string, string> = {
    code: "/icons/vs.png",
    brave: "/icons/brave.png",
  };
  const fetchData = async () => {
    if (typeof window !== "undefined" && document?.referrer) {
    
      const response = await axios.get(`${referrer}/api/pinger`);
      console.log("Received data ", response.data);
      setProcesses(response.data.processes);
    }
  };
  useEffect(() => {
    fetchData();
    setReferrer(document.referrer)
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="  flex flex-col items-center justify-center">
      <div className="flex gap-2 items-center">
        <span
          className={`w-2 h-2 rounded-md ${processes.length > 0 ? "bg-green-700  " : "bg-red-800"} custom-ping`}
        ></span>

        {processes.length == 0 && (
          <span className="opacity-50 text-xs">afk</span>
        )}
        <span className="text-sm">Currently running applications</span>
      </div>
      <div className="flex gap-2">
        {Object.keys(processIcons).map((process) => (
          <>
            <img
              key={process}
              src={processIcons[process]}
              alt={process}
              className={`w-10 ${processes.includes(process) ? "" : "grayscale opacity-50"}`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default RunningApplications;
