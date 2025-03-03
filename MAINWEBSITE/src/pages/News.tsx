import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import groundWork from "../assets/News/Groun Work.jpg";
import indoorleague from "../assets/All Teams/Indoor League New 2.jpg";
import ManOfMatch from "../assets/News/Man of the match.jpg";
import FourthNews from "../assets/News/fourth News.jpg";

const apiUrl = 'http://localhost:3000/api/v1/';
const serverUrl = 'http://localhost:3000/';
const getArticlesUrl = `${apiUrl}articles`;

const News = () => {
  const [isOpen, setIsOpen] = useState(false); // Track modal state
  const [activeImage, setActiveImage] = useState<string | null>(null); // Track active image
  const [staticNews, setStaticNews] = useState<any[]>([]); // State to hold static news
  const [apiNews, setApiNews] = useState<any[]>([]); // State to hold news fetched from API

  const openModal = (imageSrc: string) => {
    setActiveImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get(getArticlesUrl); // API to fetch articles
      if (response.data.success) {
        setApiNews(response.data.data);
      } else {
        console.error("Failed to fetch articles:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();

    // Static news data
    // setStaticNews([
    //   {
    //     id: 1,
    //     image: FourthNews,
    //     title: "Exciting News for Chelsfield CC!",
    //     description: "CCC 3s will compete in the Kent Cricket League starting May 2025...",
    //   },
    //   {
    //     id: 2,
    //     image: indoorleague,
    //     title: "CCC first year in Indoor Cricket League",
    //     description: "Chelsfield Cricket Club is thrilled to join the Indoor Cricket League...",
    //   },
    //   {
    //     id: 3,
    //     image: groundWork,
    //     title: "Ground work started for 2025 season",
    //     description: "We are excited to announce that groundwork for the 2025 season has officially commenced...",
    //   },
    //   {
    //     id: 4,
    //     image: ManOfMatch,
    //     title: "Man of the Match",
    //     description: "Congratulations to our Man of the Match for the Sam Memorial Match...",
    //   },
    // ]);
  }, []);

  return (
    <div className="w-full py-8 bg-white">
      <h1 className="text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        News
      </h1>


      {/* API News Section */}
      <div className="w-[80%] bg-white mx-auto mt-12">
        {/* <h2 className="text-xl font-bold mb-4">API News</h2> */}
        {apiNews.map((news) => (
          <div key={news._id} className="mt-4">
            <div className="flex max-sm:flex-col mt-4 gap-4">
              <img
                className="h-[180px] w-full md:w-[28%] object-cover cursor-pointer"
                src={`${serverUrl}${news.image}`}
                alt={news.title}
                onClick={() => openModal(`${serverUrl}${news.image}`)} // Open modal on click
              />
              <div className="flex flex-col gap-4 w-full md:w-[72%]">
                {/* <h3 className="text-sm uppercase">Latest News</h3> */}
                <h2 className="text-lg font-medium">{news.title}</h2>
                <p className="text-sm break-words max-w-full">{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Static News Section */}
      <div className="w-[80%] bg-white mx-auto mt-8">
        {/* <h2 className="text-xl font-bold mb-4">Static News</h2> */}
        {staticNews.map((news) => (
          <div key={news.id} className="mt-4">
            <div className="flex max-sm:flex-col mt-4 gap-4">
              <img
                className="h-[180px] w-full md:w-[28%] object-cover cursor-pointer"
                src={news.image}
                alt={news.title}
                onClick={() => openModal(news.image)} // Open modal on click
              />
              <div className="flex flex-col gap-4 w-full md:w-[72%]">
                {/* <h3 className="text-sm uppercase">Latest News</h3> */}
                <h2 className="text-lg font-medium">{news.title}</h2>
                <p className="text-sm">{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 modal-overlay"
          onClick={handleClickOutside}
        >
          <div className="relative">
            <img
              src={activeImage!}
              alt="Active"
              className="max-w-full max-h-screen"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
