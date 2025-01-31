"use client";
import {
  clearLocation,
  setLocation,
} from "@/store/features/location/locationSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import axios from "axios";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

export default function LocationBtn() {
  const location = useAppSelector((state: RootState) => state.location);
  const dispatch = useAppDispatch();

  async function getLocation() {
    try {
      // do nothing if the state is already set
      if (location.city && location.region) {
        return;
      }
      const req = await axios.get("https://ipapi.co/json/");
      const locData = req.data;

      dispatch(
        setLocation({
          city: locData.city,
          region: locData.region,
        }),
      );
    } catch (err) {
      console.log("error getting your location");
    }
  }

  useEffect(() => {
    getLocation();

    // cleanup of location state when component unmounts
    return () => {
      dispatch(clearLocation());
    };
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
