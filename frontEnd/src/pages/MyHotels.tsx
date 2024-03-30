import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from '../api-client';
import {BsBuilding, BsMap} from "react-icons/bs"
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    { 
        onError :()=>{},
    }
  );
  if(!hotelData)
  {
    return <span>No Hotels found</span>
  }
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3x; font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-sky-950 text-white text-xl font-bold p-2 hover:bg-sky-900 "
        >
          Add Hotel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel)=>(
            <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8">
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <div className="whitespace-pre-line">{hotel.description}</div>
                <div className="grid grid-cols-5 gap-2">
                    <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <span className="mr-1"><BsMap/></span>
                        {hotel.city},{hotel.country}
                    </div>
                    <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <span className="mr-1"><BsBuilding/></span>
                        {hotel.type}
                    </div>
                    <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <span className="mr-1"><BiMoney/></span>
                        {hotel.pricePerNight} per night
                    </div>
                    <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <span className="mr-1"><BiHotel/></span>
                        {hotel.adultCount} adults, {hotel.childCount} children
                    </div>
                    <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                        <span className="mr-1"><BiStar/></span>
                        {/* {hotel.starRating} Star Rating */}
                    </div>
                </div>
                <span className="flex justify-end">
                    <Link to={`/edit-hotel/${hotel._id}`} className="flex bg-sky-950 text-white text-xl font-bold p-2 hover:bg-sky-900">View Details</Link>
                </span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
