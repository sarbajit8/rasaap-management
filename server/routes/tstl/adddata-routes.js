const express = require('express');
const {
  addCompanyDetails,
  fetchAllCompanyDetails,
  fetchCompanyDetailsByEmployeeId,
  editCompanyDetails,
  deleteCompanyDetails,
} = require('../../controllers/tstl/adddata-controller');
const router = express.Router();

// Add company details for an employee
router.post('/company', addCompanyDetails);

// Fetch all company details (for admin or general view)
router.get('/companies', fetchAllCompanyDetails);

// Fetch company details by employeeId
router.get('/company/:employeeId', fetchCompanyDetailsByEmployeeId);

// Edit company details for a specific company under an employee
router.put('/edit', editCompanyDetails);  // Assuming 'companyId' and updated fields are passed in body

// Delete a specific company's details by companyId under an employee
router.delete('/delete/:employeeId/:companyId', deleteCompanyDetails); // 'employeeId' and 'companyId' passed in params


module.exports = router;
