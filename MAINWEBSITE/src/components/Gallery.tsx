import React, { useState, useEffect } from 'react';

interface GalleryProps {
  images: string[]; // Array of image URLs for the gallery
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Check if the user is on a desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add resize event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const openModal = (image: string) => {
    if (isDesktop) {
      setSelectedImage(image);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null); // Clear the selected image when closing the modal
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Gallery</h1>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            onClick={() => openModal(image)}
            key={index}
            className="w-full h-64 bg-cover cursor-pointer bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${image})` }}
          >
          </div>
        ))}
      </div>

      {isOpen && selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span onClick={closeModal} className="close absolute lg:top-[10px] lg:right-[35px] text-[#f1f1f1] lg:text-[40px] sm:text-[100px] sm:font-medium sm:top-32 sm:right-12 font-bold transition duration-300">
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Selected"
            className="modal-content mx-auto -mt-8 block lg:w-[80vw] lg:h-[80vh] sm:h-[60vh] object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
