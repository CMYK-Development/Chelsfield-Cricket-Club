const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  }
},{timestamps:true});

const Gallery = mongoose.model("Gallery", galleryImageSchema);

module.exports = { Gallery };
