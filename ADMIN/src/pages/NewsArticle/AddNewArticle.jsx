import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL for the image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to handle the file upload
      const formData = new FormData();
      formData.append("title", title); // Append the title
      formData.append("description", description); // Append the description
      if (image) formData.append("image", image); // Append the image file if available

      console.log("FormData:", formData);

      // Make the POST request to your API endpoint
      const response = await axios.post(
        "http://localhost:3000/api/v1/articles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );

      console.log(response);

      // Check the response
      if (response.status === 200) {
        console.log("Article created successfully:", response.data);
        alert("Article created successfully!");
        navigate("/update-article"); // Redirect back to the articles list or another page
      }
    } catch (error) {
      console.error("Error creating article:", error);
      alert("Failed to create article. Please try again.");
    }
  };

  const handleCancel = () => {
    // Reset form fields
    setTitle("");
    setDescription("");
    setImage(null);
    setPreview(null);
    navigate("/update-article"); // Navigate back to the previous page or article list
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-xl font-bold">Add New Article</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div>
              <label className="text-sm font-medium mb-2 block">Image *</label>
              <div className="relative border-dashed border-2 border-gray-300 rounded-md flex justify-center items-center hover:shadow-lg transition aspect-square w-48 h-48">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer text-gray-500 hover:text-blue-500 flex flex-col items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mb-2 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16.707 5.293a1 1 0 00-1.414 0L10 10.586 7.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                    </svg>
                    <span>Click to upload image</span>
                  </label>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
              </div>
            </div>

            {/* Title Input */}
            <div>
              <label className="text-sm font-medium mb-2 block">Title </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
                required
              />
            </div>

            {/* Description Input */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-2 block">Description </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                placeholder="Enter description"
                maxLength={2000}
                required
              ></textarea>
              <span className="text-xs text-gray-500 mt-1 block">
                {description.length}/2000
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewArticle;
