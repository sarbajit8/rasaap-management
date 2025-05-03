const express = require('express');
const router = express.Router();
const {
  addPackage,
  fetchAllPackages,
  editPackage,
  deletePackage,
} = require('../../controllers/admin/package-controller'); // Adjust path as needed

// Add a new package
router.post('/add', addPackage);

// Fetch all packages
router.get('/fetch', fetchAllPackages);

// Edit a package
router.put('/edit/:id', editPackage);

// Delete a package
router.delete('/delete/:id', deletePackage);

module.exports = router;
