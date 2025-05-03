const Terminate = require("../../models/Terminate");

// ✅ Add Terminate
const addTerminate = async (req, res) => {
  try {
    const { title, content, employeeId, date } = req.body;

    if (!title || !content || !employeeId || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields (title, content, employeeId, date) are required.",
      });
    }

    const newTerminate = new Terminate({
      title,
      content,
      employeeId,
      date,
    });

    await newTerminate.save();

    res.status(201).json({
      success: true,
      data: newTerminate,
    });
  } catch (e) {
    console.error("Error in addTerminate:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding termination.",
    });
  }
};

// ✅ Get All Terminations for a Specific Employee
const getTerminationsByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const terminations = await Terminate.find({ employeeId }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      data: terminations,
    });
  } catch (e) {
    console.error("Error in getTerminationsByEmployee:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching terminations.",
    });
  }
};

// ✅ Update Terminate
const updateTerminate = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, date } = req.body;

    const updatedTerminate = await Terminate.findByIdAndUpdate(
      id,
      { title, content, date },
      { new: true }
    );

    if (!updatedTerminate) {
      return res.status(404).json({
        success: false,
        message: "Termination not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedTerminate,
    });
  } catch (e) {
    console.error("Error in updateTerminate:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating termination.",
    });
  }
};

// ✅ Delete Terminate
const deleteTerminate = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Terminate.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Termination not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Termination deleted successfully.",
    });
  } catch (e) {
    console.error("Error in deleteTerminate:", e);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting termination.",
    });
  }
};

module.exports = {
  addTerminate,
  getTerminationsByEmployee,
  updateTerminate,
  deleteTerminate,
};
