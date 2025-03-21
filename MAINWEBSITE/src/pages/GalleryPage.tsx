import { useEffect, useState } from "react";
import galleryImage3 from "../assets/HeroSectionImages/fourthImage.jpg";
import image1 from "../assets/Our Gallery/image1.jpg";
import image10 from "../assets/Our Gallery/image10.jpg";
import image11 from "../assets/Our Gallery/image11.jpg";
import image12 from "../assets/Our Gallery/image12.jpg";
import image13 from "../assets/Our Gallery/image13.jpg";
import image15 from "../assets/Our Gallery/image15.jpg";
import image16 from "../assets/Our Gallery/image16 New.jpg";
import image18 from "../assets/Our Gallery/image18.jpg";
import image19 from "../assets/Our Gallery/image19.jpg";
import image2 from "../assets/Our Gallery/image2.jpg";
import image20 from "../assets/Our Gallery/image20.jpg";
import image3 from "../assets/Our Gallery/image3.jpg";
import image4 from "../assets/Our Gallery/image4.jpg";
import image5 from "../assets/Our Gallery/image5.jpg";
import image6 from "../assets/Our Gallery/image6.jpg";
import image7 from "../assets/Our Gallery/image7.jpg";
import image8 from "../assets/Our Gallery/image8.jpg";
import image9 from "../assets/Our Gallery/image9.jpg";

import Gallery from '../components/Gallery'; // Import the Gallery component
import axios from "axios";

const GalleryPage = () => {
  const [image, setImage] = useState([
    // { id: 1, src: '/assets/images/image1.jpg', selected: false, order: null },
    // { id: 2, src: '/assets/images/image2.jpg', selected: false, order: null },
    // { id: 3, src: '/assets/images/image3.jpg', selected: false, order: null },
]);
  const apiUrl = 'https://backend-chelsfield.ironstepsoftware.com/api/v1/';
  const getGalleryImageUrl=`${apiUrl}/get-gallery-images`;
  const serverUrl = 'https://backend-chelsfield.ironstepsoftware.com';
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image15,
    image16,
    image18,
    image19,
    image20,
  ]; // imore images as needed
  const fetchImages = async () => {
    try {
        const response = await axios.get(getGalleryImageUrl); // API to fetch images
        console.log("response",response);
        if (response.data.success) {
            // Update images state with backend data
            const fetchedImages = response.data.data.map((image:any) => ({
                id: image._id,
                src: `${serverUrl}/${image.imageUrl}`, // Ensure URL is correct
                selected: false,
                order: null,
            }));
            setImage(fetchedImages);
        } else {
            console.error('Failed to fetch images:', response.data.message);
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};
useEffect(() => {
    fetchImages();
}, []);
console.log("image",image)
  return (
    <div className="w-full bg-gray-100 pb-12">
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${galleryImage3})` }} // Replace with the image you want to use
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="md:text-[60px] absolute top-20 lg:top-12 text-[40px] uppercase text-center z-10 font-bold text-white">
          Our Gallery
        </h1>
      </div>

      {/* Paragraph below the image */}
      <div className="w-[90%] mx-auto my-12 text-center">
        <p className="text-lg text-gray-600">
          Explore the moments that define our cricket journey at Chelsfield Cricket Club. From intense matches 
          to team celebrations, this gallery captures the spirit and dedication of our players and the camaraderie 
          that unites us as a team. Enjoy browsing through photos of our teams, players, and memorable events.
        </p>
      </div>

      {/* Gallery Images */}

      {/* <Gallery images={image} /> */}
      <Gallery images={images} />
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        image.slice().reverse().map((img,index)=>{
          return <img src={img.src} alt={`Image ${img.src}`} className="w-full h-64 bg-cover cursor-pointer bg-center rounded-lg shadow-lg" />        
        }
          
        )
      }
      </div>
      
    </div>
  );
};

export default GalleryPage;
