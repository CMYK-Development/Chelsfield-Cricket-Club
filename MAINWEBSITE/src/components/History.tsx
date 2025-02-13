import { useState } from "react";
import { Link } from "react-router-dom";
import clubHistory from "../assets/club history.jpg";
import aboutImage from "../assets/users/NaeemAhad-removebg-preview.png";
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
    <div className="w-full bg-white pt-8 pb-16">
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
          <Link to={"club-history"} className="text-lg font-semibold">
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


      <Link to="/about" className="flex items-center mt-16 justify-center text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        Chairman's Statement
      </Link>
      <div>

 <div className="h-[400px] w-[90%] md:w-[500px] mt-8 mx-auto flex flex-col gap-3 text-center">
          <img
            className="h-[330px] w-[330px] mx-auto cursor-pointer"
            src={aboutImage}
            alt="Old Pavilion"
            onClick={() => openModal(aboutImage)} // Open modal on click
          />
          
          <p className="text-sm">
             As Chairman of this great club, I would like to take this
              opportunity to extend my heartfelt thanks to everyone who has been
              part of Chelsfield Cricket Club over the past year. Whether you
              are a player, coach, volunteer, sponsor, or supporter, your
              contribution has been invaluable to our continued success both on
              and off the field.
          </p>
        </div>
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
    </div>
  );
};

export default History;
