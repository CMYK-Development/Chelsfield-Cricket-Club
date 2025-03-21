import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import image1 from "../assets/HeroSectionImages/firstImage.jpg";
import image2 from "../assets/HeroSectionImages/Second.jpg";
import image3 from "../assets/HeroSectionImages/thirdImage.jpg";
import image4 from "../assets/HeroSectionImages/fourthImage.jpg";

const apiUrl = 'https://backend-chelsfield.ironstepsoftware.com/api/v1/';
const serverUrl = 'https://backend-chelsfield.ironstepsoftware.com';
const getSliderImageUrl = `${apiUrl}/get-slider-images`;

interface HeroCountProps {
  stateValue: number;
}

const HeroSlider = ({ stateValue }: HeroCountProps) => {
  const [images, setImages] = useState([]);

  const animationVariants = {
    // hidden: { opacity: 1 },
    // visible: { opacity: 1 },
  };

  const transition = { duration: 10, ease: "easeInOut" };

  const fetchImages = async () => {
    try {
      const response = await axios.get(getSliderImageUrl); // API to fetch images
      if (response.data.success) {
        // Update images state with backend data
        const fetchedImages = response.data.data.map((image: any) => ({
          id: image._id,
          src: `${serverUrl}/${image.imageUrl}`, // Ensure URL is correct
          selected: false,
          order: null,
        }));
        setImages(fetchedImages);
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
console.log("images",images);

  const getImage = () => {
    if (images.length > 0) {
      const currentImage = images[stateValue];
      return currentImage ? currentImage?.src : image1;
    }
    return image1;
  };

  console.log("images", images);

  return (
    <motion.img
      key={stateValue} // Forces re-rendering and animation on state change
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={animationVariants}
      transition={transition}
      className="relative inset-x-0 top-[0px] w-full h-[500px] object-cover z-[-1] p-0"
      src={getImage()}
    />
  );
};

export default HeroSlider;
