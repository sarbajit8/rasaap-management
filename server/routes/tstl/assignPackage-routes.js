const express = require('express');
const { addAssignPackage, fetchAllAssignPackages, editAssignPackage, deleteAssignPackage, fetchAssignPackagesByCompany } = require('../../controllers/tstl/assignPackage-controller');
const router = express.Router();

// Route for adding new assign package
router.post('/add',addAssignPackage);

// Route for fetching all assign packages
router.get('/fetch',fetchAllAssignPackages);

// Route for editing an assign package
router.put('/edit/:id', editAssignPackage);

// Route for deleting an assign package
router.delete('/delete/:id', deleteAssignPackage);

// Route to fetch assign packages by companyId
router.get('/company/:companyId', fetchAssignPackagesByCompany);

module.exports = router;
