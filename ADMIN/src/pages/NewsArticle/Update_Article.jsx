import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const UpdateArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [articles, setArticles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);


  // Fetch articles function
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/v1/articles");
      if (response.data.success) {
        setArticles(response.data.data);
      } else {
        setErrorMessage("Failed to fetch articles.");
      }
    } catch (error) {
      setErrorMessage("Error fetching articles.");
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call fetchArticles when component mounts
  useEffect(() => {
    fetchArticles();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (articleId) => {
    const articleToEdit = articles.find((article) => article._id === articleId);
    setCurrentArticle(articleToEdit);
    setFormData({
      title: articleToEdit.title,
      description: articleToEdit.description,
      image: null,
    });
    setPreview(articleToEdit.imageUrl); // Assuming imageUrl exists
    setShowModal(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = new FormData();
    updatedData.append("title", formData.title);
    updatedData.append("description", formData.description);
    if (formData.image) {
      updatedData.append("image", formData.image);
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/articles/${currentArticle._id}`,
        updatedData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        const updatedArticle = {
          ...currentArticle,
          title: formData.title,
          description: formData.description,
          imageUrl: response.data.data.imageUrl || currentArticle.imageUrl,
        };

        setArticles((prev) =>
          prev.map((article) =>
            article._id === currentArticle._id ? updatedArticle : article
          )
        );
        setShowModal(false);
      } else {
        setErrorMessage("Failed to update the article.");
      }
    } catch (error) {
      setErrorMessage("Error updating article.");
      console.error("Error updating article:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleCheckboxChange = (e, articleId) => {
    if (e.target.checked) {
      setSelectedArticles((prev) => [...prev, articleId]);
    } else {
      setSelectedArticles((prev) => prev.filter((id) => id !== articleId));
    }
  };
  

  const handleDelete = async () => {
    try {
      if (selectedArticles.length > 0) {
        await axios.delete("http://localhost:3000/api/v1/deleteArticle", {
          data: { ids: selectedArticles },
        });
        setSelectedArticles([]); // Reset selection
        fetchArticles(); // Fetch updated articles list
      }
    } catch (error) {
      console.error("Error deleting articles:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Top Bar */}
<div className="bg-gray-800 text-white py-4 px-4 flex justify-between items-center">
  <h1 className="text-xl font-bold">News Articles</h1>
  <div className="flex gap-2 ml-auto">
    <button
      className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow ${
        selectedArticles.length === 0 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleDelete}
      disabled={selectedArticles.length === 0}
    >
      Delete Selected
    </button>
    <Link to="/add-article">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow focus:ring focus:ring-blue-300">
        Add New
      </button>
    </Link>
  </div>
</div>


      {/* Latest News Section */}
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        {loading && <p>Loading articles...</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="max-h-64 overflow-y-auto">
          <ul className="space-y-4">
            {articles.length > 0 ? (
              articles.
              // .slice(0, 4)
              map((article) => (
                <div key={article._id} className="mt-4">
                  <div className="flex justify-between items-center gap-4">
                    {/* Checkbox */}
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, article._id)}
                    checked={selectedArticles.includes(article._id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                    <div className="flex flex-col gap-4 w-full md:w-[72%]">
                      <h2 className="text-lg font-medium">{article.title}</h2>
                      <p className="text-sm">{article.description}</p>
                    </div>
                    <button
                      onClick={() => handleUpdate(article._id)}
                      className="text-blue-500 hover:text-blue-600 focus:outline-none mr-6"
                    >
                      <FontAwesomeIcon icon={faPen} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No articles available.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Modal for Editing Article */}
      {showModal && currentArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Edit Article</h2>
            <form onSubmit={handleModalSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Image *</label>
                <div className="relative border-dashed border-2 border-gray-300 rounded-md flex justify-center items-center hover:shadow-lg transition aspect-square w-48 h-48">
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer text-gray-500 hover:text-blue-500 flex flex-col items-center"
                  >
                    <span>Click to upload image</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter title"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none focus:ring focus:ring-blue-300 focus:outline-none"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 focus:ring focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateArticle;