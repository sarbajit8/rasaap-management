import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../components/ui/sheet";
import { fetchAllAssignPackages, deleteAssignPackage, editAssignPackage, addAssignPackage, fetchAssignPackagesByCompany } from "../../store/tstl/assignPackage-slice";
import { useToast } from "../../hooks/use-toast";
import { Link, useParams } from "react-router-dom";
import { fetchAllServices } from "../../store/admin/services-slice"; // Ensure services are fetched
import { fetchAllPackages } from "../../store/admin/packages-slice"; // Ensure packages are fetched
import { fetchKycLinks } from "../../store/admin/kyclink-slice";

const AssignPackagesAdmin = () => {
  const { id: companyId } = useParams(); // Access the companyId from URL params
  const dispatch = useDispatch();
  const { assignPackages, assignPackagesdata, isLoading, error } = useSelector((state) => state.assignPackage);
  const { packages } = useSelector((state) => state.package); // Access packages from Redux
  const { services } = useSelector((state) => state.service); // Access services from Redux
  const { kycLinks } = useSelector((state) => state.kycLink); // Adjust based on your slice
  const { toast } = useToast();

  const [openSheet, setOpenSheet] = useState(false);
  const [formData, setFormData] = useState({
    companyId: companyId,
    name: "", // This will store the selected package name
    service: "", // This will store the selected service
    price: "",
    discount: "",
    description: "",
    duration: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const dataWithCompanyId = { ...formData, companyId };

    if (isEditing) {
      dispatch(editAssignPackage({ id: editingId, updatedData: dataWithCompanyId })).then((res) => {
        if (res?.payload?.success) {
          toast({ title: "Package updated successfully!" });
          setOpenSheet(false);
          setIsEditing(false);
          setFormData({
            name: "",
            service: "",
            price: "",
            discount: "",
            description: "",
            duration: "",
            date: "",
          });
          dispatch(fetchAllAssignPackages());
          dispatch(fetchAssignPackagesByCompany(companyId));
        } else {
          toast({ title: res?.payload?.message || "Error occurred while updating" });
        }
      }).catch(() => {
        toast({ title: "Failed to update package", variant: 'destructive' });
      });
    } else {
      dispatch(addAssignPackage(dataWithCompanyId)).then((res) => {
        if (res?.payload?.success) {
          toast({ title: "Package added successfully!" });
          setOpenSheet(false);
          setFormData({
            name: "",
            service: "",
            price: "",
            discount: "",
            description: "",
            duration: "",
            date: "",
          });
          dispatch(fetchAllAssignPackages());
          dispatch(fetchAssignPackagesByCompany(companyId));
        } else {
          toast({ title: res?.payload?.message || "Error occurred while adding" });
        }
      }).catch(() => {
        toast({ title: "Failed to add package", variant: 'destructive' });
      });
    }
  };

  // Handle package selection and apply a custom discount if necessary
  const handlePackageChange = (selectedPackageName) => {
    const selectedPackage = packages.find((pkg) => pkg.name === selectedPackageName);
    if (selectedPackage) {
      setFormData({
        ...formData,
        name: selectedPackage.name,
        price: selectedPackage.price,
        discount: selectedPackage.discount, // Set the assigned discount from the package
        description: selectedPackage.description,
        duration: selectedPackage.duration,
        date: selectedPackage.date,
      });
    }
  };

  const handleEdit = (pkg) => {
    setFormData(pkg);
    setEditingId(pkg._id);
    setIsEditing(true);
    setOpenSheet(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteAssignPackage(id)).then((res) => {
      if (res?.payload?.success) {
        toast({ title: res?.payload?.message || "Package deleted successfully!" });
        dispatch(fetchAllAssignPackages());
        dispatch(fetchAssignPackagesByCompany(companyId));
      } else {
        toast({ title: "Error occurred while deleting package", variant: 'destructive' });
        dispatch(fetchAllAssignPackages());
        dispatch(fetchAssignPackagesByCompany(companyId));
      }
    }).catch(() => {
      toast({ title: "Failed to delete package", variant: 'destructive' });
      dispatch(fetchAllAssignPackages());
      dispatch(fetchAssignPackagesByCompany(companyId));
    });
  };

  useEffect(() => {
    dispatch(fetchAssignPackagesByCompany(companyId));
    dispatch(fetchAllAssignPackages());
    dispatch(fetchAllServices()); // Fetch all services if needed
    dispatch(fetchAllPackages()); // Fetch all packages if needed
        dispatch(fetchKycLinks());
    
  }, [dispatch, companyId]);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="mb-5 w-full flex justify-end">
        <Button
          className="bg-pink-500 hover:bg-pink-600"
          onClick={() => {
            setOpenSheet(true);
            setIsEditing(false);
            setFormData({
              name: "",
              service: "",
              price: "",
              discount: "",
              description: "",
              duration: "",
              date: "",
            });
          }}
        >
          Add New Package
        </Button>
      </div>

      {/* Display Packages in Card Format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assignPackagesdata?.length === 0 ? (
          <p className="text-gray-400 italic">No packages found for this company.</p>
        ) : (
          assignPackagesdata?.map((pkg) => {
            // Filter the KYC links based on service match
            console.log(pkg?.service);
            console.log(kycLinks,"ddddddddddddddd");
            const matchingKycLinks = kycLinks?.filter((kycLink) => kycLink.service === pkg?.service);
console.log(matchingKycLinks,"fffffffffff");

            return (
              <div
                key={pkg?._id}
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">{pkg?.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Service: {pkg?.service}</p>
                  <p className="text-sm text-gray-600 mb-2">Price: {pkg?.price}</p>
                  <p className="text-sm text-gray-600 mb-2">Discount: {pkg?.discount}</p>
                  <p className="text-sm text-gray-600 font-medium mb-2">Duration: {pkg?.duration} days</p>
                  <p className="text-sm text-gray-600 font-medium">Description: {pkg?.description}</p>

                  {/* Total Price Calculation */}
                  <div className="mt-4 text-lg font-semibold text-indigo-700">
                    <p>Total Price: </p>
                    <p className="text-xl font-bold">
                      {pkg?.price && pkg?.discount
                        ? (pkg?.price - (pkg?.price * pkg?.discount) / 100).toFixed(2)
                        : pkg?.price}
                    </p>
                  </div>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex justify-between gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-100 transition duration-200"
                    onClick={() => handleEdit(pkg)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full sm:w-auto bg-red-500 text-white hover:bg-red-600 transition duration-200"
                    onClick={() => handleDelete(pkg?._id)}
                  >
                    Delete
                  </Button>

               
                </div>
                <div className="flex mt-4 justify-center">
                       {/* Check if any matching KYC links are found */}
                  {matchingKycLinks?.length > 0 ? (
                    <Link to={matchingKycLinks[0]?.link}> {/* Use the first matching link */}
                      <Button
                        variant="destructive"
                        className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                      >
                        Kyc
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="destructive"
                      className="w-full sm:w-auto bg-gray-400 text-white cursor-not-allowed"
                      disabled
                    >
                      Kyc Not Available
                    </Button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Sheet component for adding and editing packages */}
      <Sheet open={openSheet} onOpenChange={() => setOpenSheet(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{isEditing ? "Edit Package" : "Add New Package"}</SheetTitle>
          </SheetHeader>
          <div className="py-6">
            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                {/* Service Select Dropdown */}
                <select
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    handlePackageChange(e.target.value); // Update package data when service is selected
                  }}
                  className="border rounded p-2 w-full"
                >
                  <option value="" disabled>Select Service</option>
                  {services?.map((service) => (
                    <option key={service._id} value={service.name}>{service.name}</option>
                  ))}
                </select>

                {/* Package Name Select Dropdown (filtered by selected service) */}
                <select
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    handlePackageChange(e.target.value); // Update package data when package name is selected
                  }}
                  className="border rounded p-2 w-full"
                  disabled={!formData.service}  // Disable if no service is selected
                >
                  <option value="" disabled>Select Package</option>
                  {packages
                    ?.filter((pkg) => pkg.service === formData.service) // Filter packages by selected service
                    .map((pkg) => (
                      <option key={pkg._id} value={pkg.name}>{pkg.name}</option>
                    ))}
                </select>

                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Price"
                  className="border rounded p-2 w-full"
                />

                {/* Discount Input */}
                <input
                  type="number"
                  value={formData.discount}
                  onChange={(e) => {
                    const selectedPackage = packages?.find(pkg => pkg.name === formData.name); // Find the selected package
                    const maxDiscount = selectedPackage?.discount || 0; // Get the discount value from the selected package (default to 0 if not found)

                    // Only allow input if the value is less than or equal to the selected package's discount
                    if (e.target.value <= maxDiscount) {
                      setFormData({ ...formData, discount: e.target.value });
                    }
                  }}
                  placeholder="Discount (Optional)"
                  className="border rounded p-2 w-full"
                />

                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Description"
                  className="border rounded p-2 w-full"
                />

                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="Duration (in days)"
                  className="border rounded p-2 w-full"
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="border rounded p-2 w-full"
                />
                <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600">
                  {isEditing ? "Update Package" : "Add Package"}
                </Button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};


export default AssignPackagesAdmin