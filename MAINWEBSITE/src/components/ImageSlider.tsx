import { useState, useEffect } from "react";

import stars from "../assets/allstars1.jpg";
import stars2 from "../assets/allstars2.jpg";
import club from "../assets/Club.png";

const ImageSlider = () => {
  const images = [
    {
      src: stars,
      alt: "Stars Program",
      buttons: [
        { label: "About All Stars", href: "https://www.ecb.co.uk/play/all-stars" },
        { label: "For Parents", href: "https://www.ecb.co.uk/play/all-stars/parents" },
        { label: "FAQs", href: "https://www.ecb.co.uk/play/all-stars/faqs" },
        { label: "Register", href: "https://ecb.clubspark.uk/AllStars/ChelsfieldCricketClub/Course/bd915138-2728-4ff9-b20b-b3010ee2fd2f" },
      ],
    },
    {
      src: stars2,
      alt: "Stars Program 2",
      buttons: [
        { label: "About All Stars", href: "https://www.ecb.co.uk/play/all-stars" },
        { label: "For Parents", href: "https://www.ecb.co.uk/play/all-stars/parents" },
        { label: "FAQs", href: "https://www.ecb.co.uk/play/all-stars/faqs" },
        { label: "Register", href: "https://ecb.clubspark.uk/AllStars/ChelsfieldCricketClub/Course/bd915138-2728-4ff9-b20b-b3010ee2fd2f" },
      ],
    },
    {
      src: club,
      alt: "Club Fundraiser",
      buttons: [
        { label: "Share", href: "https://gofund.me/598620b1" },
        { label: "Donate", href: "https://www.gofundme.com/f/renovation-of-this-historic-english-cricket-club-since-1731/donate" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-change image every 10 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 10000); // 10 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Determine background color based on the current image
  const isClubImage = images[currentIndex].src === club;
  const topBarBg = isClubImage
    ? "bg-gradient-to-r from-blue-950 to-green-800"
    : "bg-gradient-to-r from-yellow-400 to-pink-500";

  return (
    <div className="w-full my-10">
      {/* === Buttons Bar (Dynamic Background) === */}
      <div className={`w-full flex ${isClubImage ? "justify-center" : "justify-center"} items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-4 ${topBarBg}`}>
        {isClubImage ? (
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-white font-bold text-lg max-sm:text-xs text-center">Renovation of this Historic English Cricket Club. Since 1731 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <div className="flex gap-2 sm:gap-4">
              {images[currentIndex].buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    button.label === "Donate"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white py-2 px-3 sm:py-3 sm:px-6 text-xs sm:text-sm rounded-md shadow-md transition duration-300 whitespace-nowrap`}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          images[currentIndex].buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                button.label === "Register" || button.label === "Donate"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white py-2 px-3 sm:py-3 sm:px-6 text-xs sm:text-sm rounded-md shadow-md transition duration-300 whitespace-nowrap`}
            >
              {button.label}
            </a>
          ))
        )}
      </div>

      {/* === Image Section === */}
      <div className="w-full relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto object-cover"
        />
        {/* Navigation Button */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={nextImage}
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;