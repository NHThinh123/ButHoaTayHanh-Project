// cloudinaryMiddleware.js

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: {
    folder: "character-img",
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
