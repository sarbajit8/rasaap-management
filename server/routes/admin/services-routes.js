const express = require("express");
const {
  addService,
  fetchAllServices,
  editService,
  deleteService,
} = require("../../controllers/admin/services-controller");

const router = express.Router();

// Add a new service
router.post("/add", addService);

// Fetch all services
router.get("/fetch", fetchAllServices);

// Fetch a single service by ID

// Edit a service by ID
router.put("/edit/:id", editService);

// Delete a service by ID
router.delete("/delete/:id", deleteService);

module.exports = router;
