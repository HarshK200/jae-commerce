"use client";
import axios from "axios";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

type TLocData = {
  ip: string;
  city: string;
  region: string;
};

export default function LocationBtn() {
  const [location, setLocation] = useState<TLocData | null>(null);

  async function getLocation() {
    try {
      const req = await axios.get("https://ipapi.co/json/");
      const locData = req.data;
      setLocation({
        ip: locData.ip,
        city: locData.city,
        region: locData.region,
      });
    } catch (err) {
      console.log("error getting your location");
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <button className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-100">
      <MapPin width={28} />
      <div className="flex flex-col">
        <p>
          {location ? `${location?.city}, ${location?.region}` : "locating..."}
        </p>
      </div>
    </button>
  );
}
