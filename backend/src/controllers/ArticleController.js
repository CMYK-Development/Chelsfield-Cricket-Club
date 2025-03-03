const express = require('express');
const path = require('path');
const Article = require('../models/Article'); // Import directly
const { sliderImagePath, articlesImagePath } = require('../utils/constants');

// Create Article
exports.createArticle = async (req, res, next) => {
  // try {
  //   console.log("Request Body:", req.body);
  //   console.log("Uploaded File:", req.file);

  //   const { title, description } = req.body;

  //   if (!title || !description) {
  //     res.status(400).json({ success: false, message: 'Title and description are required.' });
  //     return;
  //   }

  //   // Check if an image was uploaded
  //   let image = null;
  //   if (req.file) {
  //     image = path.join('uploads/articles', req.file.filename);
  //   } else {
  //     res.status(400).json({ success: false, message: 'Image is required.' });
  //     return;
  //   }

  //   // Create the article with the image path
  //   const article = new Article({ title, image, description });
  //   console.log(article.title, article.image, article.description);
  //   await article.save();

  //   res.status(201).json({
  //     success: true,
  //     message: 'Article created successfully.',
  //     data: article,
  //   });
  // } catch (error) {
  //   next(error);
  // }
  try {
    
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ success: false, message: 'Title and description are required.' });
      return;
    }
    console.log("Incoming file:", req.file); // Debug log
    // Check if the file was uploaded
    if (!req.file || !req.file.originalname) {
      return res.status(400).json({ success: false, message: "Image is required." });
    }

    // Get the uploaded file's name
    const image = `${articlesImagePath}/${req.file.filename}`;
    console.log("image",image);
    
    // Create the article with the image path
    const article = new Article({ title, image, description });
    console.log(article.title, article.image, article.description);
    const result =await article.save();
    // // Create a new slider image entry
    // const sliderImage = new ImageSlider({ imageUrl });
    // const result = await sliderImage.save();

    if (result) {
      res.status(200).json({
        success: true,
        message: "Article created successfully.",
        data: result,
      });
    } else {
      res.status(400).json({ success: false, message: "Failed to create Article." });
    }
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};


// Get All Articles
exports.getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();

    res.status(200).json({
      success: true,
      message: 'Articles fetched successfully.',
      data: articles,
    });
  } catch (error) {
    next(error);
  }
};

// Get Article by ID
exports.getArticleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article) {
      res.status(404).json({ success: false, message: 'Article not found.' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Article fetched successfully.',
      data: article,
    });
  } catch (error) {
    next(error);
  }
};

// Update Article


exports.updateArticle = async (req, res, next) => {
  try {
    console.log("req.file",req.file);
    
    const { id } = req.params;
    const { title, description } = req.body;

    // Validate the required fields
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required.' });
    }

    // Fetch the current article if we need to retain the existing image
    const currentArticle = await Article.findById(id);

    if (!currentArticle) {
      return res.status(404).json({ success: false, message: 'Article not found.' });
    }
console.log("currentArticle",currentArticle);

    // Handle image upload
    let image = currentArticle.image; // Default to the current image URL if no new image is provided
    console.log("image",image);
    
    if (req.file) {
      image = path.join('uploads/articles', req.file.filename); // Save the new image path
    }
console.log("image",image);

    // Update the article with the new data
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image, // Use the new image if uploaded, otherwise keep the old one
      },
      { new: true } // Return the updated article
    );

    if (!updatedArticle) {
      return res.status(404).json({ success: false, message: 'Article not found.' });
    }

    res.status(200).json({
      success: true,
      message: 'Article updated successfully.',
      data: updatedArticle,
    });
  } catch (error) {
    next(error);
  }
};


// Delete Article
// exports.deleteArticle = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const deletedArticle = await Article.findByIdAndDelete(id);

//     if (!deletedArticle) {
//       res.status(404).json({ success: false, message: 'Article not found.' });
//       return;
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Article deleted successfully.',
//     });
//   } catch (error) {
//     next(error);
//   }
// };


exports.countArticle = async (req, res) => {
  try {
    const count = await Article.countDocuments({});
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error fetching articles count" });
  }
};


exports.deleteArticle = async (req, res) => {
  try {
      const { ids } = req.body; // expecting an array of team IDs
      await Article.deleteMany({ _id: { $in: ids } }); // Use $in to match multiple IDs
      res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to delete articles' });
  }
};