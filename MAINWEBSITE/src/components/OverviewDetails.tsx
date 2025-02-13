import { CiClock2 } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import chelsefieldMap from "../assets/Chelsefield_Map.jpg";
const OverviewDetails = () => {
  return (
    <div className=" w-full bg-gray-200 flex max-sm:flex-col max-sm:items-center gap-12 justify-center py-8 px-12">
    <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
        <FaLocationDot className=" text-2xl text-blue-900" />
        <span className=" text-lg font-medium">Chelsefield Cricket Club</span>
    </div>
    <p>Pinewood Car Park, <br /> Moorhouse Road <br /> Chelsefield Surrey RH8 0SR</p>
    <Link to={""} className=" font-medium">View with google maps</Link>
    </div>
    <img src={chelsefieldMap} className=" h-[300px] w-[650px] object-cover rounded" alt="" />
    <div className="w-[230px] pb-8 border border-black rounded-t">
    <div className=" w-full h-10 bg-black rounded-t text-white text-lg flex items-center justify-center font-semibold">Match details</div>
    <div className=" text-black px-4 mt-4 flex flex-col gap-1">
        <h3 className=" text-sm font-medium text-gray-700">Match date</h3>
       <div className="flex items-center gap-2">
       <FaRegCalendar className=" text-xl" />
       <span>Sun 22 Sep 2024</span>
       </div>
    </div>
    <div className=" text-black px-4 mt-4 flex flex-col gap-1">
        <h3 className=" text-sm font-medium text-gray-700">Kickoff</h3>
       <div className="flex items-center gap-2">
       <CiClock2 className=" text-xl" />
       <span>12:30</span>
       </div>
    </div>
    <div className=" text-black px-4 mt-4 flex flex-col gap-1">
        <h3 className=" text-sm font-medium text-gray-700">Location</h3>
       <div className="flex items-center gap-2">
       <FaLocationDot className=" text-xl" />
       <Link to={""} className=" underline">Chelsefield Cricket Club</Link>
       </div>
    </div>
    <Link to={""} className="flex items-center hover:scale-105 transition-all duration-300 justify-center h-10 w-[80%] rounded-3xl uppercase mx-auto border-2 border-gray-400 mt-4">Team Overview</Link>
    </div>
</div>
  )
}

export default OverviewDetails