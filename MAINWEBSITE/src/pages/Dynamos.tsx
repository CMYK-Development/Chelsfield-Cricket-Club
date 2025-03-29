import React from 'react';
import logo1 from "../assets/l3.png"
import logo2 from "../assets/6.png"
import logo3 from "../assets/ll.png"
import stars2 from "../assets/allstars1.jpg"
import register from "../assets/2.png"
import directions from "../assets/3.png"
import parking from "../assets/parking.png"

const Dynamos = () => {
  return (
    <div className="bg-pink-500 min-h-screen w-full px-4 py-10 text-black font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
<div className="text-center space-y-2">
  {/* Logos Row */}
  <div className="flex justify-between items-center max-w-screen px-4">
    <img
      src={logo1}
      alt="All Stars Cricket Logo Left"
      className="w-28 sm:w-60"
    />
    <img
      src={logo2}
      alt="All Stars Cricket Logo Center"
      className="w-28 sm:w-60"
    />
    <img
      src={logo3}
      alt="All Stars Cricket Logo Right"
      className="w-28 sm:w-60"
    />
  </div>

  {/* Heading and Details */}
  <h1 className="text-2xl sm:text-4xl font-bold text-black mt-2">
    Dynamos Cricket
  </h1>
  <h2 className="text-lg sm:text-2xl font-semibold text-black">
    Is coming to historic <span className="text-blue-800">Chelsfield Cricket Club</span>
  </h2>
  <p className="text-yellow-300 text-2xl sm:text-4xl font-semibold">
    Registration starts 12 March 2025 (Spaces are limited)
  </p>
</div>


        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={stars2} // Replace with actual image path
            alt="Children with All Stars Cricket Bags"
            className="w-full max-w-4xl rounded-xl shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="p-6 sm:p-10 rounded-xl space-y-4 text-center">
          <h3 className="text-2xl font-bold text-black">
            Dynamos cricket is a brilliant introduction to cricket –It’s part of a
            national programme run by the England & Wales Cricket Board.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <ul className="space-y-2 list-disc pl-6 text-yellow-300">
              <li>Boys and girls ages 5–8 years</li>
              <li>Sunday mornings 10am - 11am</li>
              <li>8 sessions starting from 18 May 2025</li>
              <li><strong>Cost £50</strong> (includes Dynamos Cricket NB personalised T-shirt, with name & number)</li>
            </ul>
            <ul className="space-y-2 list-disc pl-6 text-yellow-300">
              <li>Suitable for all skill levels</li>
              <li>No previous cricket experience necessary</li>
              <li>ECB accredited, DBS cleared Activators</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-6 sm:p-10 rounded-xl space-y-4">
          <h3 className="text-2xl font-bold text-center">Contact for further info:</h3>
          <div className="text-center space-y-1">
            <p className="text-yellow-300 font-semibold">Mr. Afaq Punjabi</p>
            <p className="text-yellow-300 font-semibold">Phone: 07958044726</p>
            <div className="flex justify-center">
                <p className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
                    <span className="font-semibold">Email:</span>
                    <span className="mt-1 sm:mt-0 sm:ml-2">
                    <a href="mailto:afaq@chelsfieldcc.co.uk" className="text-blue-700 underline block sm:inline sm:mr-2">
                        afaq@chelsfieldcc.co.uk
                    </a>
                    <a href="https://www.chelsfieldcc.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline block sm:inline">
                        www.chelsfieldcc.co.uk
                    </a>
                    </span>
                </p>
                </div>



            </div>
        </div>

        {/* Links Section */}
        <div className="p-6 sm:p-10 rounded-xl space-y-4 text-center">
          <h3 className="text-xl font-bold">Find out more at:</h3>
          <a
            href="https://www.ecb.co.uk/play/all-stars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            www.ecb.co.uk/play/all-stars
          </a>

          <h3 className="text-xl font-bold">Register online at:</h3>
          <a
            href="https://ecb.clubspark.uk/Book/8e6f9c8a-721e-4d89-9a94-45deeda54d6b?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline break-words"
          >
            https://ecb.clubspark.uk/Book/8e6f9c8a-721e-4d89-9a94-45deeda54d6b?venue=ChelsfieldCricketClub
          </a>

          <p><strong>Venue:</strong> Chelsfield Cricket Club, Bucks Cross Road, Orpington Kent BR6 7RN.</p>
          <p><strong>Note:</strong> Children must be registered in advance.</p>
          <p>Rain policy: Light rain won’t stop play. <strong>(Heavy rain might.)</strong></p>
          <div className="flex items-center gap-2 justify-center">
          <img src={parking} alt="Parking Icon" className="w-12 sm:w-16" />
          <p className="text-yellow-300">
            <strong>Free On-Site Parking (First come, first served basis)</strong>
          </p>
          </div>
          </div>

        {/* QR Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
          <div className="flex flex-col items-center space-y-1">
            <img
              src={directions} // Replace with actual QR image path
              alt="QR Code for Directions"
              className="w-40 h-40"
            />
            <p className="text-sm font-semibold">Scan for Directions</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img
              src={register} // Replace with actual QR image path
              alt="QR Code for Registration"
              className="w-72 h-72"
            />
            <p className="text-sm font-semibold">Scan to Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamos;
