import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = 'http://localhost:3000/api/v1/';
const serverUrl = 'http://localhost:3000/';
const getArticlesUrl = `${apiUrl}/articles`;

const LatestNews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [articles, setArticles] = useState<any[]>([]);

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
      const response = await axios.get(getArticlesUrl);
      if (response.data.success) {
        setArticles(response.data.data);
      } else {
        console.error('Failed to fetch articles:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Show only the latest 4 articles
  const latestArticles = articles.slice(0, 4);
  // http://localhost:3000/api/v1/uploads/articles/arctile_image/5.PNG1734687120581.PNG
  return (
    <div className="w-full bg-white mt-72 max-sm:mt-24">
      <Link to="/all-news" className="flex items-center justify-center text-2xl uppercase font-semibold text-center pt-4 tracking-wider">
        Latest News
      </Link>
      <div className="w-[80%] bg-white mx-auto mt-8">
        {latestArticles.map((article) => (
          <div key={article._id} className="mt-4">
            <hr />
            <div className="flex max-sm:flex-col mt-4 gap-4">
              <img
                className="news-image w-full h-[180px] md:w-[28%] object-cover cursor-pointer"
                src={`${serverUrl}${article?.image}`} // Correctly constructing the image URL
                alt={article.title}
                onClick={() => openModal(`${apiUrl}/${article.imageUrl}`)} // Open modal on click
              />
              <div className="flex flex-col gap-4 w-full md:w-[72%]">
                
                <Link to={`/news/${article._id}`} className="text-lg font-medium">{article.title}</Link>
                <p className="text-sm break-words max-w-full">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
        <hr className="mt-4" />
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

      <div className="flex items-center justify-center mt-8">
        <Link to={"/all-news"} className="border-2 border-gray-800 text-gray-800 py-2 px-6 hover:scale-110 transition-all duration-300 text-lg">View All</Link>
      </div>
    </div>
  );
};

export default LatestNews;
