const express = require("express");
const { Gallery } = require("../models/gallery.model");
const path = require("path");
const { galleryImagePath } = require("../utils/constants");

exports.createGalleryImage = async (req, res, next) => {
    try {
      console.log("Incoming files:", req.files); // Debug log
      // Check if the file was uploaded
      if (!req.files || !req.files.image || req.files.image.length === 0) {
        return res.status(400).json({ success: false, message: "Image is required." });
      }
  
      // Get the uploaded file's name
      const imageUrl = `${galleryImagePath}/${req.files.image[0].filename}`;
  
      // Create a new slider image entry
      const sliderImage = new Gallery({ imageUrl });
      const result = await sliderImage.save();
  
      if (result) {
        res.status(200).json({
          success: true,
          message: "Slider image created successfully.",
          data: result,
        });
      } else {
        res.status(400).json({ success: false, message: "Failed to create slider image." });
      }
    } catch (error) {
      console.error("Error in createSliderImage:", error);
      next(error);
    }
  };
  

// Get all Slider Images
exports.getAllGalleryImages = async (req, res, next) => {
  try {
    const sliderImages = await Gallery.find();

    res.status(200).json({
      success: true,
      message: "Slider images fetched successfully.",
      data: sliderImages,
    });
  } catch (error) {
    next(error);
  }
};

// Get Slider Image by ID
exports.getGalleryImageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sliderImage = await Gallery.findById(id);

    if (!sliderImage) {
      res.status(404).json({
        success: false,
        message: "Slider image not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Slider image fetched successfully.",
      data: sliderImage,
    });
  } catch (error) {
    next(error);
  }
};

// Update Slider Image
exports.updateGalleryImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { imageUrl } = req.body;

    if (!imageUrl) {
      res
        .status(400)
        .json({ success: false, message: "Please provide a valid image URL." });
      return;
    }

    const updatedSliderImage = await Gallery.findByIdAndUpdate(
      id,
      { imageUrl },
      { new: true }
    );

    if (!updatedSliderImage) {
      res.status(404).json({
        success: false,
        message: "Slider image not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Slider image updated successfully.",
      data: updatedSliderImage,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Slider Image
exports.deleteGalleryImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedSliderImage = await Gallery.findByIdAndDelete(id);

    if (!deletedSliderImage) {
      res.status(404).json({
        success: false,
        message: "Slider image not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Slider image deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

exports.countGalleryImage = async (req, res) => {
  try {
    const count = await Gallery.countDocuments({});
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error fetching images count" });
  }
};
