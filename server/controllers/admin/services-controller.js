const Service = require("../../models/Services"); // Adjust the path as needed

// Add a new service
const addService = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if service already exists
    const existingService = await Service.findOne({ name });
    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "Service with this name already exists.",
      });
    }

    const newService = new Service({
      name,
    });

    await newService.save();

    res.status(201).json({
      success: true,
      message: "Service added successfully!",
      data: newService,
    });
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding service.",
      error: error.message,
    });
  }
};

// Fetch all services
const fetchAllServices = async (req, res) => {
  try {
    const services = await Service.find(); // Fetch all service data

    if (services.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No services found.",
      });
    }

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching services.",
      error: error.message,
    });
  }
};



// Edit an existing service
const editService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: `Service with ID ${id} not found.`,
      });
    }

    service.name = name || service.name; // Update service name if provided

    await service.save();

    res.status(200).json({
      success: true,
      message: "Service updated successfully!",
      data: service,
    });
  } catch (error) {
    console.error("Error editing service:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating service.",
      error: error.message,
    });
  }
};

// Delete a service
// const deleteService = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const service = await Service.findByIdAndDelete(id);

//     if (!service) {
//       return res.status(404).json({
//         success: false,
//         message: `Service with ID ${id} not found.`,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Service deleted successfully!",
//     });
//   } catch (error) {
//     console.error("Error deleting service:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error occurred while deleting service.",
//       error: error.message,
//     });
//   }
// };

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);

    if (!service)
      return res.status(404).json({
        success: false,
        message: "service not found",
      });

    res.status(200).json({
      success: true,
      message: "service delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

module.exports = {
  addService,
  fetchAllServices,
  editService,
  deleteService,
};
