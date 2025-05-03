const AssignPackage = require('../../models/AssignPackages'); // Adjust path as needed

// Add new assign package
const addAssignPackage = async (req, res) => {
  try {
    const { companyId, name, service, price, discount,discountPrice, description, duration, date } = req.body;

    // Create a new assign package
    const newAssignPackage = new AssignPackage({
      companyId,
      name,
      service,
      price,
      discount,
      discountPrice,
      description,
      duration,
      date
    });

    // Save the package to the database
    await newAssignPackage.save();

    res.status(201).json({
      success: true,
      message: "Assign package added successfully!",
      data: newAssignPackage,
    });
  } catch (error) {
    console.error("Error adding assign package:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding the assign package.",
      error: error.message,
    });
  }
};

// Fetch all assign packages
const fetchAllAssignPackages = async (req, res) => {
  try {
    const assignPackages = await AssignPackage.find(); // Fetch all assign packages from the database

    if (!assignPackages.length) {
      return res.status(404).json({
        success: false,
        message: "No assign packages found.",
      });
    }

    res.status(200).json({
      success: true,
      data: assignPackages,
    });
  } catch (error) {
    console.error("Error fetching assign packages:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching assign packages.",
      error: error.message,
    });
  }
};


// Fetch all assign packages by companyId
const fetchAssignPackagesByCompany = async (req, res) => {
    try {
      const { companyId } = req.params; // Get companyId from URL parameters
  
      // Fetch assign packages based on companyId
      const assignPackages = await AssignPackage.find({ companyId }); // Filter by companyId
  
      if (!assignPackages.length) {
        return res.status(404).json({
          success: false,
          message: `No assign packages found for company ID ${companyId}.`,
        });
      }
  
      res.status(200).json({
        success: true,
        data: assignPackages,
      });
    } catch (error) {
      console.error("Error fetching assign packages by company ID:", error);
      res.status(500).json({
        success: false,
        message: "Error occurred while fetching assign packages by company ID.",
        error: error.message,
      });
    }
  };
  

// Edit an assign package
const editAssignPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyId, name, service, price, discount,discountPrice, description, duration, date } = req.body;

    const updatedAssignPackage = await AssignPackage.findByIdAndUpdate(
      id,
      {
        companyId,
        name,
        service,
        price,
        discount,
        discountPrice,
        description,
        duration,
        date,
      },
      { new: true } // Return the updated assign package
    );

    if (!updatedAssignPackage) {
      return res.status(404).json({
        success: false,
        message: `Assign package with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Assign package updated successfully!",
      data: updatedAssignPackage,
    });
  } catch (error) {
    console.error("Error updating assign package:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the assign package.",
      error: error.message,
    });
  }
};

// Delete an assign package
const deleteAssignPackage = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedAssignPackage = await AssignPackage.findByIdAndDelete(id);
      console.log("Deleted Package:", deletedAssignPackage); // Debugging log
  
      if (!deletedAssignPackage) {
        return res.status(404).json({
          success: false,
          message: `Assign package with ID ${id} not found.`,
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Assign package deleted successfully!",
      });
    } catch (error) {
      console.error("Error deleting assign package:", error);
      res.status(500).json({
        success: false,
        message: "Error occurred while deleting the assign package.",
        error: error.message,
      });
    }
  };
  

module.exports = {
  addAssignPackage,
  fetchAllAssignPackages,
  editAssignPackage,
  deleteAssignPackage,
  fetchAssignPackagesByCompany
};
