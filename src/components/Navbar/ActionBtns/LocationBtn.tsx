"use client";
import axios from "axios";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocationBtn() {
  const [location, setLocation] = useState<{
    city: string | undefined;
    region: string | undefined;
  }>({ city: undefined, region: undefined });

  async function getLocation() {
    try {
      // do nothing if the state is already set
      if (location.city && location.region) {
        return;
      }
      // const req = await axios.get("https://ipapi.co/json/");
      // const locData = req.data;

      const locData = {
        city: "temp",
        region: "area",
      };

      setLocation((prev) => {
        return { city: locData.city, region: locData.region };
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
          {location.city && location.region
            ? `${location?.city}, ${location?.region}`
            : "locating..."}
        </p>
      </div>
    </button>
  );
}
