const Brand = require("../../models/AddImage");
const { imageUploadUtil } = require("../../helpers/cloudinary");




const handleImageUpload = async (req, res) => {
    try {
     
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      const url = "data:" + req.file.mimetype + ";base64," + b64;
      const result = await imageUploadUtil(url);
  
      res.json({
        success: true,
        result,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Error occured",
      });
    }
  };
  

const addImage = async (req, res) => {
  try {
    const {
      image,
      name,
     
      
    } = req.body;

    const newlyCreatedBrand = new Brand({
      image,
      name,
 
    });

    await newlyCreatedBrand.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedBrand,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};


const fetchAllImage = async (req, res) => {
  try {
    const listOfBrands = await Brand.find({});
    res.status(200).json({
      success: true,
      data: listOfBrands,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Brand.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    res.status(200).json({
      success: true,
      message: "Product delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};
const editImage = async (req, res) => {
    try {
      const { id } = req.params; // Extract the ID from the request parameters
      const { image, name} = req.body; // Extract updated data from request body
  
      // Find the image by its ID and update it
      const updatedImage = await Brand.findByIdAndUpdate(
        id,
        { image, name},
        { new: true } // This option returns the updated document
      );
  
      if (!updatedImage) {
        return res.status(404).json({
          success: false,
          message: "Image not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Image updated successfully!",
        data: updatedImage,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Error occurred while updating the image",
      });
    }
  };
  

module.exports = {
    addImage,
    fetchAllImage,
    deleteImage,
    editImage,
    handleImageUpload
  };
  