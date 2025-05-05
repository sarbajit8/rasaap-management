const express = require("express");
const { addKycLink, getAllKycLinks, deleteKycLink, editKycLink } = require("../../controllers/admin/kycLink-controller");
const router = express.Router();

// Route for adding a new KYC link
router.post("/add",addKycLink);

// Route for fetching all KYC links
router.get("/fetch", getAllKycLinks);

// Route for deleting a KYC link by ID
router.delete("/delete/:id", deleteKycLink);

router.put("/edit/:id", editKycLink); 

module.exports = router;
