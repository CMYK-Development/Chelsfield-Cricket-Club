import { useState } from "react";
import headCoach from "../assets/All Players/player8.jpg";
import AfaqPunjabi from "../assets/users/Afaq Punjabi.jpg";
import NaeemAhad from "../assets/users/NaeemAhad-removebg-preview.png";
import TanveerAslam from "../assets/users/Tanveer Aslam.jpg";
import Asjad2 from "../assets/users/Untitled design (6).png";
import MaheshKannan from "../assets/users/Mahesh Kannan.jpg"
interface ClubContactProps {
  image: string;
  name: string;
  email: string;
  number: string;
  position: string;
  onImageClick: (imageSrc: string) => void; // Add click handler prop
}

const KeyClubContact = (props: ClubContactProps) => {
  return (
    <div className="w-[200px] max-sm:mx-auto max-sm:w-[270px] h-auto flex flex-col items-center">
      <img
        loading="lazy"
        className="w-full h-[244px] object-cover hover:opacity-70 transition-all duration-300 cursor-pointer"
        src={props.image}
        alt={props.name}
        onClick={() => props.onImageClick(props.image)} // Call the click handler
      />
      <p className="uppercase font-semibold text-sm text-center mt-4">
        {props.position}
      </p>
      <p className="uppercase font-medium text-sm text-center">{props.name}</p>
      <a href={`mailto:${props.email}`}>{props.email}</a>
      <a href={`tel:${props.number}`}>{props.number}</a>
      <hr className="w-[60%] mx-auto mt-2" />
    </div>
  );
};

const ClubContacts = () => {
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

  return (
    <div className="w-full bg-white pt-8">
      <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        Key Club Contacts
      </h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 w-[80%] max-sm:w-[75%] gap-4 mx-auto mt-8">
        <KeyClubContact
          name="Naeem Ahad"
          position="Chairman"
          email="Naeem@chelsfieldcc.co.uk"
          number="+44 7572 427856"
          image={NaeemAhad}
          onImageClick={openModal} // Pass the click handler
        />
          <KeyClubContact
          name="Mahesh Kannan"
          position="Interim Secretary"
          email="Mahesh@chelsfieldCC.co.uk"
          number="+447865988332"
          image={MaheshKannan}
          onImageClick={openModal} // Pass the click handler
        />
        <KeyClubContact
          name="Asjad Mir"
          position="Treasurer"
          email="Asjad@chelsfieldcc.co.uk"
          number="+44 7984 130132"
          image={Asjad2}
          onImageClick={openModal} // Pass the click handler
        />
        <KeyClubContact
          name="Afaq Punjabi"
          position="Operations Officer"
          email="Afaq@chelsfieldcc.co.uk"
          number="+44 7958 044726"
          image={AfaqPunjabi}
          onImageClick={openModal} // Pass the click handler
        />
        <KeyClubContact
          name="Tanveer Aslam"
          position="Skill Development Officer"
          email="Tanveer@chelsfieldcc.co.uk"
          number="+44 7877 729107"
          image={TanveerAslam}
          onImageClick={openModal} // Pass the click handler
        />
        <KeyClubContact
          name="Ijaz Butt"
          position="Head Coach"
          email=""
          number=""
          image={headCoach}
          onImageClick={openModal} // Pass the click handler
        />
      
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 h-[0px] w-[80%] bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
         <div className="modal" onClick={closeModal}>
         <span onClick={closeModal} className="close absolute lg:top-[10px] lg:right-[35px] text-[#f1f1f1] lg:text-[40px] text-[50px] font-semibold right-4 top-0 lg:font-bold transition duration-300">
            &times;
          </span>
         <img
              src={activeImage!}
              alt="Active"
              className="modal-content object-cover mx-auto -mt-8 block"
            />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubContacts;
