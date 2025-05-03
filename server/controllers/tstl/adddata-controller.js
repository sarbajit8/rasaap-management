const Company = require("../../models/CompanyData"); // Adjust path as needed

// Add company details for an employee (and employee details)
const addCompanyDetails = async (req, res) => {
  try {
    const { employeeId, employeeName, companies } = req.body;

    console.log('Received data in controller:', { employeeId, employeeName, companies }); // Log received data

    // Check if the employee already exists
    let existingEmployee = await Company.findOne({ employeeId });

    if (existingEmployee) {
      // If employee exists, add the new company details to the existing record
      console.log('Employee exists. Adding new companies...');
      existingEmployee.companies.push(...companies);
      await existingEmployee.save();
      res.status(201).json({
        success: true,
        message: "Company details added successfully to existing employee.",
      });
    } else {
      // If employee does not exist, create a new record
      console.log('Employee does not exist. Creating new record...');
      const newCompanyDetails = new Company({
        employeeId,
        employeeName,
        companies,
      });
      await newCompanyDetails.save();

      res.status(201).json({
        success: true,
        message: "Company details added successfully for new employee.",
      });
    }
  } catch (error) {
    console.error("Error adding company details:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding company details.",
      error: error.message,
    });
  }
};



// Fetch all company data (for admin or general view)
const fetchAllCompanyDetails = async (req, res) => {
  try {
    const companies = await Company.find(); // Fetch all company data

    if (companies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No company details found.",
      });
    }

    res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (error) {
    console.error("Error fetching all company details:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching company details.",
      error: error.message,
    });
  }
};

// Fetch company details by employeeId
const fetchCompanyDetailsByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params; // Get employeeId from route parameters

    // Find companies associated with the given employeeId
    const company = await Company.findOne({ employeeId });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: `No company details found for employee ID: ${employeeId}.`,
      });
    }

    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    console.error("Error fetching company details by employeeId:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching company details by employee ID.",
      error: error.message,
    });
  }
};


// Edit company details for an individual company
const editCompanyDetails = async (req, res) => {
  try {
    const { employeeId, companyId, updatedData } = req.body; // Get employeeId, companyId and updated data from the request

    // Find the employee
    const employee = await Company.findOne({ employeeId });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: `Employee with ID: ${employeeId} not found.`,
      });
    }

    // Find the specific company by companyId
    const companyIndex = employee.companies.findIndex((company) => company._id.toString() === companyId);

    if (companyIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Company with ID: ${companyId} not found.`,
      });
    }

    // Update the company details
    employee.companies[companyIndex] = { ...employee.companies[companyIndex], ...updatedData };

    // Save the updated employee data with the modified company details
    await employee.save();

    res.status(200).json({
      success: true,
      message: "Company details updated successfully.",
      data: employee.companies[companyIndex], // Send back the updated company data
    });
  } catch (error) {
    console.error("Error updating company details:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating company details.",
      error: error.message,
    });
  }
};


// Delete company details for an individual company
const deleteCompanyDetails = async (req, res) => {
  try {
    const { employeeId, companyId } = req.params; // Get employeeId and companyId from route parameters

    // Find the employee
    const employee = await Company.findOne({ employeeId });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: `Employee with ID: ${employeeId} not found.`,
      });
    }

    // Find the index of the company to delete
    const companyIndex = employee.companies.findIndex((company) => company._id.toString() === companyId);

    if (companyIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Company with ID: ${companyId} not found.`,
      });
    }

    // Remove the company from the array
    employee.companies.splice(companyIndex, 1);

    // Save the updated employee data with the company removed
    await employee.save();

    res.status(200).json({
      success: true,
      message: "Company details deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting company details:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting company details.",
      error: error.message,
    });
  }
};


module.exports = {
  addCompanyDetails,
  fetchAllCompanyDetails,
  fetchCompanyDetailsByEmployeeId,
  deleteCompanyDetails,
  editCompanyDetails
};
