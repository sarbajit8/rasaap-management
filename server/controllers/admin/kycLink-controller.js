const KycLink = require("../../models/KycLinks"); // Adjust the path to where your KycLink model is located

// Controller for adding a new KYC link
const addKycLink = async (req, res) => {
  try {
    const { name, service, link } = req.body;
    
    // Create new KYC Link document
    const newKycLink = new KycLink({
      name,
      service,
      link,
    });

    // Save the document to the database
    await newKycLink.save();
    
    return res.status(201).json({
      success: true,
      message: "KYC Link added successfully!",
      data: newKycLink,
    });
  } catch (error) {
    console.error("Error adding KYC link:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};

// Controller for fetching all KYC links
const getAllKycLinks = async (req, res) => {
  try {
    const kycLinks = await KycLink.find(); // Fetch all KYC links
    return res.status(200).json({
      success: true,
      data: kycLinks,
    });
  } catch (error) {
    console.error("Error fetching KYC links:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};

// Controller for deleting a KYC link by ID
const deleteKycLink = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from URL params

    // Find and delete the KYC link by ID
    const deletedKycLink = await KycLink.findByIdAndDelete(id);

    if (!deletedKycLink) {
      return res.status(404).json({
        success: false,
        message: "KYC link not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "KYC Link deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting KYC link:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};


// Controller for editing an existing KYC link
const editKycLink = async (req, res) => {
    try {
      const { id } = req.params; // Extract the ID from URL params
      const { name, service, link } = req.body; // Extract updated values from the request body
  
      // Find the KYC link by ID and update it
      const updatedKycLink = await KycLink.findByIdAndUpdate(
        id,
        { name, service, link },
        { new: true } // Return the updated document
      );
  
      if (!updatedKycLink) {
        return res.status(404).json({
          success: false,
          message: "KYC link not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "KYC Link updated successfully!",
        data: updatedKycLink,
      });
    } catch (error) {
      console.error("Error updating KYC link:", error);
      return res.status(500).json({
        success: false,
        message: "Server error, please try again later.",
      });
    }
  };
module.exports = {
    addKycLink,
    getAllKycLinks,
    deleteKycLink,
    editKycLink
  };
  