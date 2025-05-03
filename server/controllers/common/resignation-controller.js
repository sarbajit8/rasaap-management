const Resignation = require("../../models/Resignation");

// ✅ Add new resignation application

// Controller for adding resignation data
const addResignation = async (req, res) => {
  try {
    // Extract required fields from the request body
    const { employeeName, employeeId, title, application, date } = req.body;

    // Check if all required fields are provided
    if (!employeeName || !employeeId || !title || !application || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields (employeeName, employeeId, title, application, date) are required.",
      });
    }

    // Create a new resignation document
    const newResignation = new Resignation({
      employeeName,
      employeeId,
      title,
      application,  // application content (like leave application)
      date,  // date of resignation
    });

    // Save the resignation to the database
    await newResignation.save();

    // Respond with success
    res.status(201).json({
      success: true,
      data: newResignation,  // Send the created resignation as response
    });
  } catch (e) {
    console.error("Error occurred while adding resignation:", e);
    // Handle any errors
    res.status(500).json({
      success: false,
      message: "Error occurred while adding resignation.",
    });
  }
};
  
  

// ✅ Get all resignations by employeeId
const getResignationsByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const resignations = await Resignation.find({ employeeId });

    if (!resignations.length) {
      return res.status(404).json({
        success: false,
        message: "No resignations found for this employee.",
      });
    }

    res.status(200).json({
      success: true,
      data: resignations,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching resignations.",
    });
  }
};

// ✅ Get all resignations
const fetchAllResignations = async (req, res) => {
  try {
    const resignations = await Resignation.find({}).sort({ date: -1 });

    res.status(200).json({
      success: true,
      data: resignations,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching resignation applications.",
    });
  }
};

// ✅ Edit resignation by ID
const editResignation = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeName, employeeId, title, application, date } = req.body;

    const resignation = await Resignation.findById(id);
    if (!resignation) {
      return res.status(404).json({
        success: false,
        message: "Resignation application not found.",
      });
    }

    resignation.employeeName = employeeName || resignation.employeeName;
    resignation.employeeId = employeeId || resignation.employeeId;
    resignation.title = title || resignation.title;
    resignation.application = application || resignation.application;
    resignation.date = date || resignation.date;

    await resignation.save();

    res.status(200).json({
      success: true,
      data: resignation,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error occurred while editing resignation application.",
    });
  }
};

// ✅ Update resignation reply
const updateResignationReplyById = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    const resignation = await Resignation.findById(id);
    if (!resignation) {
      return res.status(404).json({
        success: false,
        message: "Resignation application not found.",
      });
    }

    resignation.reply = reply;
    await resignation.save();

    res.status(200).json({
      success: true,
      message: "Reply updated successfully.",
      data: resignation,
    });
  } catch (error) {
    console.error("Error updating reply:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating resignation reply.",
    });
  }
};

// ✅ Delete resignation application
const deleteResignationById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedResignation = await Resignation.findByIdAndDelete(id);

    if (!deletedResignation) {
      return res.status(404).json({
        success: false,
        message: "Resignation application not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Resignation application deleted successfully.",
    });
  } catch (e) {
    console.error("Error deleting resignation application:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting resignation application.",
    });
  }
};

module.exports = {
  addResignation,
  getResignationsByEmployeeId,
  fetchAllResignations,
  editResignation,
  updateResignationReplyById,
  deleteResignationById,
};
