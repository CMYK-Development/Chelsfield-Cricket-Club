import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiGreaterThanLight } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'; // For notifications

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/v1/touch`, formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full bg-gray-800">
       
        <div className="flex items-center gap-1 ml-32 py-4 text-white">
          <Link to={"/"} className="hover:underline">Home</Link>
          <PiGreaterThanLight className="text-sm" />
          <span>Get In Touch</span>
        </div>
        <hr />
        <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider text-white">
          Get In Touch
        </h1>
        <div className="grid grid-cols-[70%_30%] max-sm:grid-cols-1 w-[80%] max-sm:w-[95%] mx-auto shadow-lg mt-4">
          <div className="bg-white max-sm:rounded-t-lg pb-12">
            <form className="w-[80%] max-sm:w-[90%] mx-auto mt-8" onSubmit={handleSubmit}>
              <h1 className="text-lg font-medium">Send Us A Message</h1>
              <div className="grid grid-cols-2 max-sm:grid-cols-1">
                <div className="h-[100px] w-[280px] mt-4">
                  <label className="text-gray-400">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                  <label className="text-gray-400">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                  <label className="text-gray-400">Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600"
                    placeholder="Phone #"
                    required
                  />
                </div>
              </div>
              <div className="h-[100px] w-full mt-4">
                <label className="text-gray-400">Message *</label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-6 placeholder:text-gray-600"
                  placeholder="Write your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="h-12 w-44 mt-4 hover:opacity-70 transition-all duration-300 text-white bg-blue-900"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-blue-900 pb-4 max-sm:rounded-b-lg">
            <div className="w-[80%] mx-auto text-gray-400 flex flex-col gap-4 mt-8">
              <h1 className="text-xl text-white max-sm:text-lg">Contact Information</h1>
              <p>We will be happy to help with any questions you might have about the Club or hiring our facilities!</p>
              <div className="flex items-start gap-4 mt-8 max-sm:mt-4">
                <FaLocationDot className="text-white text-xl" />
                <p>Bucks Cross Road, Chelsfield, Orpington Kent, BR6 7RN</p>
              </div>
              <div className="flex items-start gap-4 mt-8 max-sm:mt-4">
                <IoCall className="text-white text-xl" />
                <p>+447572-427856</p>
              </div>
              <div className="flex items-start max-sm:flex-wrap gap-4 mt-8 max-sm:mt-4">
                <IoMdMail className="text-white text-xl" />
                <p className="max-sm:text-sm">info@chelsfieldcc.co.uk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <hr />
          <h1 className="text-white uppercase mt-4 text-2xl font-semibold text-center">Where to find us</h1>
          <iframe
            className="w-[95%] rounded-lg md:w-[80%] mx-auto h-[400px] pb-8 object-cover mt-8"
            src="https://maps.google.com/maps?q=chelsfield%20cricket%20club&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
