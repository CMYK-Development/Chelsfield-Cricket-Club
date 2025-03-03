import { useState } from "react";
import { Link } from "react-router-dom";
import clubHistory from "../assets/club history.jpg";
import aboutImage from "../assets/users/NaeemAhad-removebg-preview.png";
import vicepresident from "../assets/users/VicePresident.jpeg";
import president from "../assets/users/president.jpeg";

const History = () => {
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
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="w-full bg-white pt-8 pb-16 max-sm:pb-0">
      <Link to="/club-history" className="flex items-center justify-center text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        Club History
      </Link>
      <div className="flex max-sm:flex-col  gap-8 items-center justify-center mt-8 md:w-[80%] w-[90%] mx-auto">
        {/* Section 1 */}
        <div className="h-[400px] md:w-[600px] w-full mx-auto flex flex-col gap-3 text-center">
          <img
            className="h-[330px] w-[600px] mx-auto cursor-pointer"
            src={clubHistory}
            alt="Club History"
            onClick={() => openModal(clubHistory)} // Open modal on click
          />
          <Link to={"club-history"} className="text-lg font-semibold mt-4">
            Cricket in Chelsefield
          </Link>
          <p className="text-sm">
            Founded in 1731, Chelsfield Cricket Club is one of the region's
            oldest clubs. From its origins as a village team, it has grown
            through community support and resilience, relocating and expanding
            over the centuries.
          </p>
        </div>

        {/* Section 2 */}
       
      </div>


      <Link to="/about" className="flex items-center mt-36 justify-center text-2xl uppercase font-semibold text-center tracking-wider">
        Chairman's Statement
      </Link>
      <div className="flex flex-row max-sm:flex-col mt-12 max-sm:mt-16 items-center justify-center">

 <div className="h-[400px] w-[90%] md:w-[500px] max-sm:mb-72 mx-auto flex flex-col gap-3 text-center items-center">
          <div className="md:mt-24">
          <img
            className="h-[275px] w-[275px] mx-auto cursor-pointer"
            src={vicepresident}
            alt="Old Pavilion"
            onClick={() => openModal(vicepresident)} // Open modal on click
          />
          <p className="text-lg font-semibold mb-4">VICE PRESIDENT</p>
          <p className="text-sm w-[330px] text-justify">
          As Vice President of Chelsfield Cricket Club and First XI Skipper, I extend my heartfelt thanks to all players, coaches, volunteers, sponsors, and supporters for their invaluable contributions over the past year. I wish all members continued success and hope you play with pride, passion, and enjoyment for years to come.

Cricket is more than just a game. It is built on respect, integrity, and the Spirit of Cricket. As players, we must uphold these values, ensuring the game is always played in a truly sportsmanlike manner. While we must follow the Laws, we must also safeguard the Spirit of Cricket. Let us continue to honour this great tradition, both on and off the field.
          </p>
        </div>
        </div>


        <div className="h-[400px] w-[90%] md:w-[500px] max-sm:mb-48 mx-auto flex flex-col gap-3 text-center items-center">
        
          <img
            className="h-[275px] w-[275px] mx-auto cursor-pointer"
            src={aboutImage}
            alt="Old Pavilion"
            onClick={() => openModal(aboutImage)} // Open modal on click
          />
          <p className="text-lg font-semibold mb-4">CHAIRMAN</p>
          <p className="text-sm w-[330px] text-justify">
             As Chairman of this great club, I would like to take this
              opportunity to extend my heartfelt thanks to everyone who has been
              part of Chelsfield Cricket Club over the past year. Whether you
              are a player, coach, volunteer, sponsor, or supporter, your
              contribution has been invaluable to our continued success both on
              and off the field.
          </p>
        </div>
      


      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="relative">
            <img
              src={activeImage!}
              alt="Active"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

<div className="h-[400px] w-[90%] md:w-[500px] max-sm:mb-24 mx-auto flex flex-col gap-3 text-center items-center">
        <div className="md:mt-24">
          <img
            className="h-[275px] w-[275px] mx-auto cursor-pointer"
            src={president}
            alt="Old Pavilion"
            onClick={() => openModal(president)} // Open modal on click
          />
          <p className="text-lg font-semibold mb-4">PRESIDENT</p>
          <p className="text-sm w-[330px] text-justify">
          It is an honor to have been part of Chelsfield Cricket Club for over 50 years, following the legacy of my family. From starting as a scorer to my debut in 1964 at Cudham, and playing over 650 matches, the journey has been unforgettable.

I am deeply privileged to now serve as President and wish the members every success. May you continue to play with pride and enjoy same passion for this historic club as I have. Best wishes to all for future.
          </p>
        </div>
        </div>
        </div>
      
    </div>
  );
};

export default History;
