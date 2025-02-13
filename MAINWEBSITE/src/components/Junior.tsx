import { PiGreaterThanBold } from "react-icons/pi";
import logo from "../assets/Chelsefield_blue-removebg-preview.png";
import resultsImage from "../assets/AboutImage.jpg"
import matchresults from "../assets/matchResults.jpg"
const Junior = () => {
  return (
    <div className='mt-4'>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
        <div className=' pb-4 w-[90%] mx-auto bg-white rounded-lg'>
            <h2 className=' w-full flex items-center justify-center text-xl font-semibold uppercase rounded-t-lg bg-black text-white h-10'>Recent results</h2>
            <div className=' mt-4 flex items-center justify-between px-4'>
            <span className=' h-8 p-2 w-48 text-nowrap bg-green-300/40 uppercase flex items-center justify-center font-semibold text-green-800'>Cancelled - Friendly</span>
            <span className=' font-medium text-gray-600'>8 Aug</span>
           </div>
        <div className='flex items-center justify-between px-8 max-sm:px-2 mt-4 cursor-pointer hover:bg-gray-400/20 transition-all duration-300'>
            <div className=' flex flex-col items-center gap-8'>
               <div className="">
               <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-24 w-32 object-cover' src={logo} alt="" />
                    <span>Chelsefield</span>
                </div>
               </div>
                <span className=' font-semibold uppercase'>Sunday Tigers
                </span>
                <p className=' font-semibold text-gray-600'>Chelsefield Cricket Club
                </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-white">
                <span className=" h-12 w-14 max-sm:h-8 max-sm:w-10 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">P</span>
                <PiGreaterThanBold className=' text-xl text-gray-600 ml-20' />
                <span className=" h-12 w-14 max-sm:h-8 max-sm:w-10 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">P</span>
            </div>
        </div>
        <hr className=" mt-4" />
           <div className=' mt-4 flex items-center justify-between px-4'>
            <span className=' h-8 p-2 w-48 text-nowrap bg-green-300/40 uppercase flex items-center justify-center font-semibold text-green-800'>Under 13 Tier 2 East</span>
            <span className=' font-medium text-gray-600'>11 Aug</span>
           </div>
        <div className='flex items-center justify-between px-8 max-sm:px-2 mt-4 cursor-pointer hover:bg-gray-400/20 transition-all duration-300'>
            <div className=' flex flex-col items-center gap-8'>
               <div className="">
               <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-24 w-32 object-cover' src={logo} alt="" />
                    <span>Chelsefield</span>
                </div>
              
               </div>
                <span className=' font-semibold uppercase'>Saturday 1st XI
                </span>
                <p className=' font-semibold text-gray-600'>Chelsefield Cricket Club
                </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-white">
                <span className=" h-12 w-20 max-sm:h-8 max-sm:w-16 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">95/6</span>
                <PiGreaterThanBold className=' text-xl text-gray-600 ml-20' />
                <span className=" h-12 w-20 max-sm:h-8 max-sm:w-16 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">130/6</span>
            </div>
          
        </div>
        <hr className=" mt-4" />
           <div className=' mt-4 flex items-center justify-between px-4'>
            <span className=' h-8 p-2 w-64 text-nowrap bg-green-300/40 uppercase flex items-center justify-center font-semibold text-green-800'>Under 14 Tier 2 Sunday East</span>
            <span className=' font-medium text-gray-600'>31 July</span>
           </div>
        <div className='flex items-center justify-between px-8 max-sm:px-2 mt-4 cursor-pointer hover:bg-gray-400/20 transition-all duration-300'>
            <div className=' flex flex-col items-center gap-8'>
               <div className="">
               <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-24 w-32 object-cover' src={logo} alt="" />
                    <span>Chelsefield</span>
                </div>
              
               </div>
                <span className=' font-semibold uppercase'>Saturday 2nd XI
                </span>
                <p className=' font-semibold text-gray-600'>Chelsefield Cricket Club
                </p>
            </div>
            <div className="flex flex-col items-center gap-4 text-white">
                <span className=" h-12 w-20 max-sm:h-8 max-sm:w-16 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">100/7</span>
                <PiGreaterThanBold className=' text-xl text-gray-600 ml-20' />
                <span className=" h-12 w-20 max-sm:h-8 max-sm:w-16 max-sm:text-lg text-2xl font-semibold flex items-center rounded-lg justify-center bg-black">85/8</span>
            </div>
          
        </div>
        </div>
        <div className=" -mt-4">
        <img src={matchresults} className=" w-[90%] h-[48%] mx-auto rounded-lg mt-5 object-cover" alt="" />
        <img src={resultsImage} className=" w-[90%] h-[48%] mx-auto rounded-lg mt-5 object-cover" alt="" />
        </div>
        </div>
        <div className=" h-12 w-52 mx-auto flex items-center justify-center mt-8 cursor-pointer text-lg font-bold uppercase rounded-[2rem] bg-white">View All Matches</div>
        <div className="flex justify-center gap-8 mt-8 max-sm:flex-col">
        <div className=' h-[423px] w-[550px] max-sm:w-[380px] max-sm:mx-auto bg-white rounded-lg cursor-pointer'>
            <h2 className=' w-full flex items-center justify-center text-xl font-semibold uppercase rounded-t-lg bg-black text-white h-10'>Divsion 2 - 1st xi</h2>
        <div className="h-16 w-full bg-gray-100 border border-gray-300 pt-4 px-4 text-lg font-semibold">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                <div>#</div>
                    <div>Team</div>
                </div>
                <div>Pts</div>
            </div>
           
        </div>
        <div className="h-16 w-full bg-white border border-gray-300 pt-4 px-4 text-lg font-semibold cursor-pointer hover:bg-gray-400/20 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>1</div>
                    <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-12 w-16 object-cover' src={logo} alt="" />
                    <span>Saturday 1st XI
                    </span>
                </div>
                </div>
                <div>271</div>
            </div>
           
        </div>
        <div className="h-16 w-full bg-white border border-gray-300 pt-4 px-4 text-lg font-semibold cursor-pointer hover:bg-gray-400/20 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>2</div>
                    <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-12 w-16 object-cover' src={logo} alt="" />
                    <span>Saturday 2nd XI
                    </span>
                </div>
                </div>
                <div>242</div>
            </div>
           
        </div>
        <div className="h-16 w-full bg-white border border-gray-300 pt-4 px-4 text-lg font-semibold cursor-pointer hover:bg-gray-400/20 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>3</div>
                    <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-12 w-16 object-cover' src={logo} alt="" />
                    <span>Saturday 3rd XI

                    </span>
                </div>
                </div>
                <div>235</div>
            </div>
           
        </div>
        <div className="h-16 w-full bg-white border border-gray-300 pt-4 px-4 text-lg font-semibold cursor-pointer hover:bg-gray-400/20 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>4</div>
                    <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-12 w-16 object-cover' src={logo} alt="" />
                    <span>Sunday Tigers
                    </span>
                </div>
                </div>
                <div>192</div>
            </div>
           
        </div>
        <div className="h-16 w-full bg-white border border-gray-300 pt-4 px-4 text-lg font-semibold cursor-pointer hover:bg-gray-400/20 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>5</div>
                    <div className=' flex items-center font-semibold uppercase'>
                    <img className='h-12 w-16 object-cover' src={logo} alt="" />
                    <span>T20
                    </span>
                </div>
                </div>
                <div>184</div>
            </div>
           
        </div>
        <div className=" h-12 w-52 mx-auto flex items-center justify-center mt-8 cursor-pointer text-lg font-bold uppercase rounded-[2rem] bg-white">View Full Table</div>
        </div>
        <div className='h-[422px] w-[550px] max-sm:w-[380px] max-sm:mx-auto bg-white rounded-t-lg'>
           <div>
           <h2 className=' w-full flex items-center justify-center text-xl font-semibold uppercase rounded-t-lg bg-black text-white h-10'>1st xi - 2024 Season</h2>
           <h3 className=" text-center font-semibold mt-4 text-xl">Matches Summary</h3>
           <div className="flex items-center justify-center gap-4">
           <div className=" flex flex-col items-center gap-2 mt-1 text-lg">
           <span className=" text-gray-600 font-medium">Played</span>
           <span className=" font-semibold text-2xl">16</span>
           </div>
           <div className=" flex flex-col items-center mt-4 gap-2 text-lg">
           <span className=" text-gray-600 font-medium">Won</span>
           <span className=" font-semibold text-2xl">11</span>
           <div className=" h-1 w-[40px] bg-green-500"></div>
           </div>
           <div className=" flex flex-col items-center mt-4 gap-2 text-lg">
           <span className=" text-gray-600 font-medium">Drawn</span>
           <span className=" font-semibold text-2xl">1</span>
            <div className=" h-1 w-[40px] bg-gray-300"></div>
           </div>
           <div className=" flex flex-col items-center mt-4 gap-2 text-lg">
           <span className=" text-gray-600 font-medium">Lost</span>
           <span className=" font-semibold text-2xl">3</span>
            <div className=" h-1 w-[40px] bg-red-500"></div>
           </div>
           </div>
          <div className=" w-[70%] mx-auto flex items-center justify-center mt-10">
            <div className=" h-3 w-[68.75%] bg-green-500 rounded-l-lg"></div>
            <div className=" h-3  w-[6.25%] bg-gray-300"></div>
            <div className=" h-3  w-[18.75%] bg-red-500 rounded-r-lg"></div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            <span className="text-xl  font-semibold">Form</span>
            <div className="flex gap-4 text-lg font-semibold mt-4">
                <div className=" h-8 w-8 bg-red-500 rounded-md text-white flex items-center justify-center">L</div>
                <div className="h-8 w-8 bg-green-500 rounded-md flex items-center justify-center">W</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-4 text-lg">
            <div className=" font-medium text-gray-600">Average PPG</div>
            <span className=" font-bold">169.1/7.0</span>
          </div>
           </div>
           <div className=" h-12 w-52 mx-auto flex items-center justify-center mt-[70px] cursor-pointer text-lg font-bold uppercase rounded-[2rem] bg-white">View More Stats</div>
        </div>
        </div>
       
    </div>
  )
}

export default Junior