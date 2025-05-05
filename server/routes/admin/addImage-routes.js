const express = require("express");
const { addImage,
     fetchAllImage,
      deleteImage, 
      editImage, 
      handleImageUpload } = require("../../controllers/admin/addImage-controller");
const { upload } = require("../../helpers/cloudinary");

const router = express.Router();


router.post("/upload-image", upload.single("my_file"), handleImageUpload);

// Route for adding an image
router.post("/add", addImage);

// Route for fetching all images
router.get("/fetch", fetchAllImage);

// Route for deleting an image by ID
router.delete("/delete/:id", deleteImage);

// Route for editing an image by ID
router.put("/edit/:id", editImage); // This route handles the edit functionality

module.exports = router;
