import { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === 4 ? 0 : prev + 1));
      console.log(heroCount);
    }, 5000);
    return () => clearInterval(interval); // clear the interval on component unmount
  }, [heroCount]);

  return (
    <div className="relative w-full">
      <HeroSlider stateValue={heroCount} />
      {/* Background overlay to make text stand out */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
    <div className="flex justify-center">
    <div className="absolute bottom-24 flex flex-col gap-4 text-white w-[60%] max-sm:w-[90%] mx-auto z-20">
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
