import { PiGreaterThanLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { BiSolidVideos } from "react-icons/bi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const JoinUs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    postcode: '',
    email: '',
    mobileNumber: '',
    address: '',
    emergencyContactName: '',
    emergencyPhone: '',
    relationship: '',
    alternativePhone: '',
    membershipType: '',
    medicalInfo: '',
  });


  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   const handleCheckboxChange = (e:any) => {
    setIsChecked(e.target.checked); // Update checkbox state
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    const {
      fullName,
      dateOfBirth,
      postcode,
      email,
      mobileNumber,
      address,
      emergencyContactName,
      emergencyPhone,
      relationship,
      membershipType,
    } = formData;
  
    // Validation for required fields
    if (
      !fullName ||
      !dateOfBirth ||
      !postcode ||
      !email ||
      !mobileNumber ||
      !address
    ) {
      toast.error("Please fill all the required fields.");
      return;
    }
  
    try {
      const response = await axios.post(
        `https://backend-chelsfield.ironstepsoftware.com/api/v1/join`,
        formData
      );
      toast.success(response.data.message);
      setFormData({
        fullName: '',
        dateOfBirth: '',
        postcode: '',
        email: '',
        mobileNumber: '',
        address: '',
        emergencyContactName: '',
        relationship: '',
        emergencyPhone: '',
        alternativePhone: '',
        membershipType: '',
        medicalInfo: '',
      });
      setIsChecked(false);
    } catch (error) {
      toast.error('Failed to register. Please try again.');
      console.error(error);
    }
  };
  
  return (
    <div className="w-full text-black bg-gray-800 pb-10">
         <div className='bg2 relative'></div>
       <div className=' absolute top-[70%] left-[50%] -translate-x-1/2 lg:top-[60%] w-[90%] z-10 text-white lg:w-[60%] '>
           <h1 className=' text-[30px] max-sm:text-[25px] font-bold uppercase leading-[1] text-center'>Chelsfield Cricket Club - Membership Registration Form - 2025
           </h1>
       </div>
       <div className=" flex items-center gap-1 ml-32 py-4 text-white">
            <Link to={"/"} className=" hover:underline">Home</Link>
            <PiGreaterThanLight className=" text-sm" />
            <span>Join Us</span>
        </div>
        <hr />
       
        <div className='flex gap-2 px-8 max-sm:flex-col'>
        <form
         onSubmit={handleSubmit}
        className=" mt-10 w-[90%] max-sm:w-full mx-auto bg-white rounded px-12 py-8 text-black" >
        <h2 className=' text-center text-3xl max-sm:text-lg font-semibold'>Join Chelsfield Cricket Club</h2>
        <div className=' w-full border border-blue-500 bg-sky-500/10 max-sm:px-2 py-4 px-8 flex flex-col mt-4'>
          <div className=' text-sky-600 flex items-center gap-2 text-lg max-sm:text-sm'>
            <FaInfoCircle />
            <span className=' font-semibold'>Signing up for your child?</span>
          </div>
          <div className=' max-sm:text-sm'>
            <p>Please enter <span className=' font-semibold'>your details</span> below to register as a parent. You will add your child’s details later in the process.</p>
          </div>
        </div>
                    <div className=" flex flex-col gap-4 mt-6">
                     <div className='grid grid-cols-2 max-sm:text-sm gap-4 max-sm:grid-cols-1'>
                     <div>
                        <label htmlFor="name">Full Name:
                        </label>
                        <input 
                        type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full text-black py-2 px-4 rounded-md border border-gray-400" />
                        </div>
                       <div>
                       <label htmlFor="date">Date of Birth:
                        </label>
                        <input
                        type="date"
                          name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                     
                      <div>
                       <label htmlFor="email">Email</label>
                       <input
                       type='email'
                       name="email"
                        value={formData.email}
                        onChange={handleChange}
                       className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                        <div>
                        <label htmlFor="phone">Mobile Number:
                        </label>
                        <input type="tel" 
                        name="mobileNumber"
                     value={formData.mobileNumber}
                        onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                        </div>
                      <div>
                      <label>Address:
                        </label>
                        <input  type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                 className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                      <label htmlFor="phone">Postcode:</label>
                      <input 
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                     </div>
                        <span className=" text-xl max-sm:text-base font-semibold mt-8">Emergency Contact Details
                        </span>
                    <div className='grid grid-cols-2 max-sm:text-sm gap-4 max-sm:grid-cols-1'>
                    <div>
                       <label className=" mt-8">Emergency Contact Name:
                        </label>
                        <input 
                         type="text"
                         name="emergencyContactName"
                        value={formData.emergencyContactName}
                          onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                      <div>
                      <label className="">Relationship to Member:
                        </label>
                        <input  type="text"
                name="relationship"
               value={formData.relationship}
                onChange={handleChange}
                 className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                      <div>
                      <label>Emergency Contact Number:
                        </label>
                        <input 
                        type='tel'
                         name="emergencyPhone"
                         value={formData.emergencyPhone}
                         onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                      </div>
                       <div>
                       <label>Alternative Emergency Contact:
                        </label>
                        <input 
                        type='tel'
                         name="alternativePhone"
                        value={formData.alternativePhone}
                         onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" />
                       </div>
                    </div>
                        <span className="text-xl max-sm:text-base font-semibold mt-8">Membership Type: (Please tick the appropriate box)
                        </span>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                            <input  type="radio"
                  name="membershipType"
                  value="Junior"
                  onChange={handleChange}
                  checked={formData.membershipType === 'Junior'} className="" />
                            <span>Junior Membership (Under 13)
                            </span>
                        </div>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                            <input 
                             type="radio"
                             name="membershipType"
                             value="Student"
                             onChange={handleChange}
                             checked={formData.membershipType === 'Student'}
                            className="" />
                            <span>Student Membership (proof from college/university)

                            </span>
                        </div>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                            <input 
                              type="radio"
                              name="membershipType"
                              value="Regular"
                              onChange={handleChange}
                              checked={formData.membershipType === 'Regular'}
                            className="" />
                            <span>Regular Membership
                            </span>
                        </div>
                        <div className="flex items-center gap-2 max-sm:text-sm">
                            <input
                             type="radio"
                             name="membershipType"
                             value="Social"
                             onChange={handleChange}
                             checked={formData.membershipType === 'Social'}
                            className="" />
                            <span>Social Membership

                            </span>
                        </div>
                        <span className="text-xl max-sm:text-base font-semibold mt-8">Medical Information (Optional):
                        </span>
                        <label className=' max-sm:text-sm'>Please list any medical conditions or allergies the club should be aware of:</label>
                        <textarea
                         name="medicalInfo"
                         value={formData.medicalInfo}
                         onChange={handleChange}
                        className=" border border-gray-400 w-full text-black py-2 px-4 rounded-md" rows={4}></textarea>
                       
                     
                    </div>
                </form>
                <div className='mt-10 w-[90%] max-sm:w-full bg-white rounded max-sm:px-6 px-12 py-8 text-black'>
                  <h2 className=' mt-2 text-2xl max-sm:text-lg max-sm:leading-tight font-medium'>Get these amazing benefits</h2>
                  <div className='flex flex-col gap-3 mt-8'>
                    <div className='flex items-center gap-8 '>
                      <PiUsersThreeBold className=' text-blue-900 text-xl max-sm:text-[50px]' />
                      <span className=' max-sm:text-sm'>Confirm your selection online in seconds</span>
                    </div>
                    <div className='flex items-center gap-8'>
                      <BiSolidVideos className=' text-blue-900 text-xl max-sm:text-[50px]' />
                      <span className=' max-sm:text-sm'>Access private team videos and photos</span>
                    </div>
                    <div className='flex items-center gap-8'>
                      <HiInboxArrowDown className=' text-blue-900 text-xl max-sm:text-[50px]' />
                      <span className=' max-sm:text-sm'>Receive club news direct to your inbox</span>
                    </div>
                  </div>
                  <h2 className=' mt-8 text-2xl max-sm:text-lg font-medium'>Terms & Conditions:</h2>
                  <p className='flex flex-col mt-2 max-sm:text-sm'><span className=' font-semibold max-sm:text-base'>1. Code of Conduct:</span>
                  All members are expected to adhere to the club's code of conduct, which outlines acceptable behavior on and off the field. This includes respect for coach, management teammates, opponents, umpire and club property.
                  </p>
                  <p className='flex flex-col mt-2 max-sm:text-sm'><span className=' font-semibold max-sm:text-base'>2. Disciplinary Actions</span>
                  Any violation of the club's code of conduct or involvement in any inappropriate behaviour, either during club activities or outside, may result in disciplinary action. This may include suspension or termination of membership, depending on the severity of the violation.
                  </p>
                  <p className='flex flex-col mt-2 max-sm:text-sm'><span className=' font-semibold max-sm:text-base'>3. Non-Refundable Fees</span>
                  Membership fees paid to Chelsfield Cricket Club are non-refundable under any circumstances, including termination of membership due to disciplinary actions or voluntary withdrawal from the club.
                  </p>
                  <div className=" mt-10">
               
               <p className=" mb-2 font-semibold text-lg max-sm:text-base">For any queries, 
               </p>
               <p className=" mb-2 font-semibold max-sm:text-sm">Contact Us At:  <span className=' font-normal'>+44 7572 427856</span>
               </p>
               <p className=" mb-2 font-semibold max-sm:text-sm">Club Email:  <span className=' font-normal'>info@chelsfieldcc.co.uk</span>
               </p>
              
           </div>
          <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="termsCheckbox" className="text-sm">
                I have read and agree with the <span className="font-semibold">terms and conditions</span>.
              </label>
            </div>
          <div className='flex flex-col items-center justify-center'>
                        <button onClick={handleSubmit}  className={`bg-blue-900 mt-6 w-[300px] md:w-[500px] text-white py-2 px-4 rounded-md ${!isChecked? "bg-opacity-70 cursor-not-allowed" : ""}`}>Join this club</button>
          </div>
                </div>
        </div>
    </div>
  )
}

export default JoinUs