import { Link } from "react-router-dom";
import APS from "../assets/sponsors/APS.webp";
import FandFAccountants from "../assets/sponsors/F & Accountants.png";
import fairvue from "../assets/sponsors/FairVue.jpg";
import greenOlive from "../assets/sponsors/Green & Olive.jpg";
import RealtyEye from "../assets/sponsors/Realty_Eye-removebg-preview.png";
import hymglobal from "../assets/sponsors/hym_global-removebg.png";
import zedExotics from "../assets/sponsors/zed exotics.jpg";
import fishchips from "../assets/sponsors/fish and chips logo.jpg";

const Sponsors = () => {
  return (
    <div className='w-full bg-white py-8'>
      <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider">Our Partners</h1>
      <p className='text-base mt-4 max-sm:text-sm text-center max-sm:px-4 w-[90%] md:w-[70%] mx-auto'>
        Chelsfield Cricket Club are proud to be associated with our amazing partners who have a great vision to support the game at the grassroots level - promoting talent, initiatives on club development, and community events.
      </p>
      
      {/* Grid for all sponsors including last sponsor for larger screens */}
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 w-[90%] ml-0 md:ml-28 md:w-[85%] mx-auto items-center mt-8'>
        <div className='ml-8 max-sm:ml-0'>
          <Link to={"https://weareaps.co.uk/"}>
            <img className='lg:w-[180px] h-[60px] w-[280px] max-sm:h-[40px] object-contain' src={APS} alt="APS Sponsor" />
          </Link>
        </div>
        <div>
          <Link to={"https://greenandolive.co.uk/"}>
            <img className='w-[280px] h-[200px] object-contain' src={greenOlive} alt="Green Olive Sponsor" />
          </Link>
        </div>
        <div className='lg:ml-2 ml-8 max-sm:-mt-16'>
          <Link to={"https://www.fairvuepartners.com/"}>
            <img className='w-[280px] h-[200px] object-contain' src={fairvue} alt="FairVue Sponsor" />
          </Link>
        </div>
        <div className='-mt-20 ml-16 max-sm:-mt-16'>
          <Link to={"https://find-and-update.company-information.service.gov.uk/company/08373705"}>
            <img className='w-[100px] h-[100px] max-sm:h-[70px] object-contain' src={zedExotics} alt="Zed Exotics Sponsor" />
          </Link>
        </div>
        <div className='-mt-16'>
          <Link to={"https://find-and-update.company-information.service.gov.uk/company/09843906"}>
            <img className='w-[340px] h-[200px] object-contain' src={RealtyEye} alt="Realty Eye Sponsor" />
          </Link>
        </div>
        <div className='-mt-16 max-sm:ml-2'>
          <Link to={"https://hymglobal.com/"}>
            <img className='w-[340px] h-[220px] object-contain' src={hymglobal} alt="HYM Global Sponsor" />
          </Link>
        </div>
        <div className='-mt-16 -ml-14 max-sm:ml-8'>
          <Link to={"http://Ff-accountants.co.uk"}>
            <img className='w-[340px] max-sm:w-[420px] h-[200px] object-contain' src={FandFAccountants} alt="F & F Accountants Sponsor" />
          </Link>
        </div>
        <div className='-mt-16 max-sm:ml-8'>
          <Link to={"https://msidiqsons.com/"}>
            <img className='w-[340px] max-sm:w-[420px] h-[200px] object-contain' src="https://msidiqsons.com/wp-content/uploads/2023/10/logo-msidiq-2-420x107.png" alt="MS Idiq Sons Sponsor" />
          </Link>
        </div>
        
        {/* Last sponsor only for large screens */}
        <div className="hidden sm:block -mt-20 ml-6">
          <Link to={"https://www.tripadvisor.com/Restaurant_Review-g1934185-d7895050-Reviews-Mo_s_Fish_and_Chips-Orpington_Bromley_Greater_London_England.html"}>
            <img className='w-[310px] max-sm:w-[420px] h-[100px] object-contain' src={fishchips} alt="Fish and Chips Sponsor" />
          </Link>
        </div>
      </div>

      {/* Last sponsor only for mobile screens */}
      <div className="flex justify-center mt-2 sm:hidden">
        <Link to={"https://www.tripadvisor.com/Restaurant_Review-g1934185-d7895050-Reviews-Mo_s_Fish_and_Chips-Orpington_Bromley_Greater_London_England.html"}>
          <img className='w-[340px] max-sm:w-[300px] h-[200px] object-contain' src={fishchips} alt="Fish and Chips Sponsor" />
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
