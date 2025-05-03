const Package = require('../../models/Packages'); // Adjust path as needed

// Add new package
const addPackage = async (req, res) => {
    try {
      const { name, service, price, discount, description, duration, date } = req.body;
  
      const newPackage = new Package({
        name,
        service,
        price,
        discount,
        description, // This now matches the schema
        duration,
        date
      });
  
      await newPackage.save();
  
      res.status(201).json({
        success: true,
        message: "Package added successfully!",
        data: newPackage,
      });
    } catch (error) {
      console.error("Error adding package:", error);
      res.status(500).json({
        success: false,
        message: "Error occurred while adding the package.",
        error: error.message,
      });
    }
  };
  

// Fetch all packages
const fetchAllPackages = async (req, res) => {
  try {
    const packages = await Package.find(); // Fetch all packages from the database

    if (!packages.length) {
      return res.status(404).json({
        success: false,
        message: "No packages found.",
      });
    }

    res.status(200).json({
      success: true,
      data: packages,
    });
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching packages.",
      error: error.message,
    });
  }
};


// Edit a package
const editPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, service, price, discount, description, duration, date } = req.body;

    const updatedPackage = await Package.findByIdAndUpdate(
      id,
      {
        name,
        service,
        price,
        discount,
        description,
        duration,
        date,
      },
      { new: true } // Return the updated package
    );

    if (!updatedPackage) {
      return res.status(404).json({
        success: false,
        message: `Package with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Package updated successfully!",
      data: updatedPackage,
    });
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the package.",
      error: error.message,
    });
  }
};

// Delete a package
const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPackage = await Package.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({
        success: false,
        message: `Package with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Package deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting package:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting the package.",
      error: error.message,
    });
  }
};

module.exports = {
  addPackage,
  fetchAllPackages,
  editPackage,
  deletePackage,
};
