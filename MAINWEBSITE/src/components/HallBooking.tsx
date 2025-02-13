import { PiGreaterThanLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import hallroom1 from "../assets/hireHall/hallroom.jpg";
import hallroom2 from "../assets/hireHall/hallroom.jpg";
import hallroom3 from "../assets/hireHall/hallroom.jpg";
import hallroom4 from "../assets/hireHall/hallroom.jpg";
import hirePitch from "../assets/News/Groun Work.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const HallBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingType: "Hire Hall",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/v1/hireHall`,
        formData
      );
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        bookingType: "Hire Hall",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full bg-gray-800 pb-10">
      {/* Hero Section */}
      <div className="bg3 relative"></div>
      <div className="absolute lg:top-[70%] left-[20%] z-10 top-[87%] text-white w-[60%] mx-auto">
        <h1 className="text-[60px] max-sm:text-[30px] font-bold uppercase leading-[1] text-center">
          Hire our Facilities
        </h1>
      </div>
      <div className="flex items-center gap-1 ml-32 py-4 text-white">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <PiGreaterThanLight className="text-sm" />
        <span>Hire Hall & Pitch</span>
      </div>
      <hr />

      <div className="text-white w-[80%] max-sm:w-[90%] mx-auto mt-4">
        {/* Hall Details */}
        <p>
          Our hall is available for hire throughout the week and is ideal for
          birthday parties, engagement parties, and other special occasions.
        </p>
        <p>
          For further inquiries, contact us at +447572-427856 or email us at{" "}
          <a href="mailto:admin@chelsfieldcc.co.uk" className="underline">
          admin@chelsfieldcc.co.uk
          </a>
          . Please book in advance to avoid disappointment!
        </p>

        <Slider className="mt-8" {...settings}>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hallroom1}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hallroom2}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hallroom3}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hallroom4}
              alt="Hall Room"
            />
          </div>
        </Slider>

        {/* Pitch Details */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Pitch Hire</h2>
          <p>
            Our well-maintained cricket pitch is also available for hire. Whether
            you're planning a friendly match or a corporate event, the pitch
            offers the perfect setting for a great day of cricket.
          </p>
          <p>
            Booking the pitch includes access to all necessary facilities, Please contact us for availability and pricing.
          </p>
        </div>
        <Slider className="mt-8" {...settings}>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hirePitch}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hirePitch}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hirePitch}
              alt="Hall Room"
            />
          </div>
          <div>
            <img
              className="h-[450px] w-full rounded object-cover"
              src={hirePitch}
              alt="Hall Room"
            />
          </div>
        </Slider>
        {/* Booking Form */}
        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-center">Contact Us</h1>
            <div className="h-[600px] max-sm:h-[500px] grid grid-cols-[70%_30%] max-sm:grid-cols-1 w-full mx-auto shadow-lg mt-4">
              <div className="bg-white max-sm:rounded-t-lg">
                <div className="w-[80%] max-sm:w-[90%] mx-auto mt-8">
                  <h1 className="text-lg font-medium">Send Us A Message</h1>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1">
                    <div className="h-[100px] w-[280px] mt-4">
                      <label className="text-gray-400">Name *</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        className="h-[30px] w-full max-sm:w-[90%] border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="h-[100px] w-[280px] mt-4">
                      <label className="text-gray-400">Email *</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        className="h-[30px] w-full max-sm:w-[90%] border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="h-[100px] w-[280px] mt-4">
                      <label className="text-gray-400">Phone *</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        type="text"
                        className="h-[30px] w-full max-sm:w-[90%] border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                        placeholder="Phone #"
                      />
                    </div>
                    <div className="h-[100px] w-[280px] flex flex-col gap-2 mt-4">
                      <label className="text-gray-400">Select *</label>
                      <select
                        name="bookingType"
                        value={formData.bookingType}
                        onChange={handleChange}
                        className="border-b-[1px] h-[30px] text-gray-400 focus:border-black outline-none"
                      >
                        <option>Hire Hall</option>
                        <option>Hire Pitch</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-[100px] w-full mt-4">
                    <label className="text-gray-400">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-[30px] border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                      placeholder="Write your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-12 w-44 my-12 lg:mt-4 hover:opacity-70 transition-all duration-300 text-white bg-blue-900"
                  >
                    Send Message
                  </button>
                </div>
              </div>
              <div className="bg-blue-900">
                <div className="w-[80%] mx-auto text-gray-400 mt-8">
                  <h1 className="text-xl text-white">Contact Information</h1>
                  <p>We are happy to help with any questions about hiring our facilities!</p>
                  <div className="flex items-start gap-4 mt-4">
                    <FaLocationDot className="text-white text-xl" />
                    <p>Bucks Cross Road, Chelsfield, Orpington, Kent, BR6 7RN</p>
                  </div>
                  <div className="flex items-start gap-4 mt-4">
                    <IoCall className="text-white text-xl" />
                    <p>+447572-427856</p>
                  </div>
                  <div className="flex items-start gap-4 mt-4">
                    <IoMdMail className="text-white text-xl" />
                    <p>admin@chelsfieldcc.co.uk</p>
                  </div>
                  <div className=" max-sm:mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className=" max-sm:mt-[600px]"></div>
    </div>
  );
};

export default HallBooking;
