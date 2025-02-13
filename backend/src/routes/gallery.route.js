const express = require("express");
const fs = require("fs");
const GalleryRouter = express.Router();
const { galleryImagePath } = require("../utils/constants");

const {
  createGalleryImage,
  getAllGalleryImages,
  getGalleryImageById,
  updateGalleryImage,
  deleteGalleryImage,
  countGalleryImage
} = require("../controllers/gallery.controller");
const { uploadImage } = require("../middleware/uploadfile");

// Ensure the directory exists
if (!fs.existsSync(galleryImagePath)) {
  fs.mkdirSync(galleryImagePath, { recursive: true });
}

// Middleware for image upload
const uploadMiddleware = (req, res, next) => {
  console.log("middleware")
  uploadImage(galleryImagePath, [{ name: "image", maxCount: 1 }])(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_TYPES") {
        return res.status(400).json({ message: err.message, success: false });
      }
      return res.status(500).json({ message: "File upload error", success: false });
    }
    next();
  });
};

// Routes
GalleryRouter.post("/upload-gallery-image", uploadMiddleware, createGalleryImage);
GalleryRouter.get("/get-gallery-images", getAllGalleryImages);
GalleryRouter.get("/gallery/:id", getGalleryImageById);
GalleryRouter.put("/gallery/:id", updateGalleryImage);
GalleryRouter.delete("/gallery/:id", deleteGalleryImage);
// GalleryRouter.get("/countsliders", countSliderImage);

module.exports = GalleryRouter;
