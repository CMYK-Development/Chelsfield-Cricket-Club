import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EqualOpportunity from "../assets/All Sections/Equal_opportunities.jpg";
import junior from "../assets/All Sections/Junior_Players.jpg";
import hallRoom from "../assets/hireHall/hallroom.jpg";
import stars from "../assets/allstars1.jpg";
import stars2 from "../assets/allstars2.jpg";
import club from "../assets/Club.png";

import ImageSlider from "./ImageSlider";

const AboutClub = () => {
  const [isOpen, setIsOpen] = useState(false); // Track modal state
  const [activeImage, setActiveImage] = useState<string | null>(null); // Track active image

  const openModal = (imageSrc: string) => {
    setActiveImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    // Close the modal if the background (outside the image) is clicked
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const images = [
    {
      id: 1,
      src: [stars],
      alt: 'First Slide'
    },
    {
      id: 2,
      src: [stars2],
      alt: 'Second Slide'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <div className="w-full bg-white pt-8">
      <div className="w-full bg-white pt-8">
      {/* Marquee Running Stripe */}
     
      <div className="marquee">
  <div className="marquee-content">
    <span>Kent’s Oldest Cricket Club,&nbsp;&nbsp;Established 1731 • Kent’s Oldest Cricket Club,&nbsp;&nbsp;Established 1731</span>
  </div>
</div>


<ImageSlider/>


    </div>
      <h1 className="text-2xl max-sm:text-lg uppercase font-semibold text-center pt-4 tracking-wider">
        Find out more about the club
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-8">
        {/* Image 1 */}
        <div className="h-[400px] w-[390px] mx-auto max-sm:w-[340px] text-sm">
          <img
            className="w-full h-[280px] object-cover cursor-pointer"
            src={EqualOpportunity}
            alt="Equal Opportunity"
            onClick={() => openModal(EqualOpportunity)}
          />
          <Link
            to={"/teams"}
            className="font-semibold text-lg flex justify-center mt-2 hover:underline"
          >
            Our Teams
          </Link>
          <p className="text-center mt-2">
          We have 4 senior teams in Kent League and a mid-Week T20 team.
          </p>
        </div>

        {/* Image 2 */}
        <div className="h-[400px] w-[390px] mx-auto max-sm:w-[340px] text-sm">
          <img
            className="w-full h-[280px] object-cover cursor-pointer"
            src={junior}
            alt="Junior Players"
            onClick={() => openModal(junior)}
          />
          <Link
            to={"/equality"}
            className="font-semibold text-lg flex justify-center mt-2 hover:underline"
          >
            Equality, Diversity & Inclusivity
          </Link>
          <p className="text-center mt-2">
            The Club supports equal opportunities for all and has a dedicated
            ED&I lead.
          </p>
        </div>

        {/* Image 3 */}
        <div className="h-[400px] w-[390px] mx-auto max-sm:w-[340px] text-sm">
          <img
            className="w-full h-[280px] object-cover cursor-pointer"
            src={hallRoom}
            alt="Hall Room"
            onClick={() => openModal(hallRoom)}
          />
          <Link
            to={"/hall"}
            className="font-semibold text-lg flex justify-center mt-2 hover:underline"
          >
            Hire Our Facilities
          </Link>
          <p className="text-center mt-2">
            The hall room in our modern pavilion is the perfect venue for your
            next event – find out how to book.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 h-[0px] w-[80%] mx-auto bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
         <div className="modal" onClick={closeModal}>
         <span onClick={closeModal} className="close absolute lg:top-[10px] lg:right-[35px] text-[#f1f1f1] lg:text-[40px] sm:text-[100px] sm:font-medium sm:top-32 sm:right-12 font-bold transition duration-300">
            &times;
          </span>
            <img
              src={activeImage!}
              alt="Active"
              className="modal-content mx-auto -mt-8 block lg:w-[80vw] lg:h-[80vh] sm:h-[60vh] object-cover"
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutClub;
