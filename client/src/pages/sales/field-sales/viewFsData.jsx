import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompanyDetails,
  fetchAllCompanyDetails,
  editCompanyDetails,
  deleteCompanyDetails,
} from "../../../store/tstl/adddata-slice";
import { useToast } from "../../../hooks/use-toast"; // Adjust the toast import based on your setup
import { fetchAllUsers } from "../../../store/auth-slice";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Tabs, TabsContent } from "../../../components/ui/tabs";

const ViewFsData = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { companyDetails } = useSelector((state) => state.adddata); // Ensure you're using the right selector
  const { user, allUsers } = useSelector((state) => state.auth); // Assuming allUsers contains all users
  const employeeName = user?.userName;
  
  const [statusFilter, setStatusFilter] = useState(""); // Filter by status
  
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllCompanyDetails()); // Fetch all companies
  }, [dispatch]);

  const [forms, setForms] = useState([
    {
      companyName: "",
      address: "",
      phoneNo: "",
      type: "",
      assignedfs: "",
      statusfs: "",
    },
  ]);

  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedForms = [...forms];
    updatedForms[index][name] = value;
    setForms(updatedForms);
  };

  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        companyName: "",
        address: "",
        phoneNo: "",
        type: "",
        assignedfs: "",
        statusfs: "",
      },
    ]);
  };

  const handleRemoveForm = (index) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
  };

  const handleInputChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (companyId) => {
    setEditingRowIndex(companyId);
    const companyToEdit = companyDetails
      ?.flatMap((detail) => detail.companies || [])
      ?.find((company) => company._id === companyId);
    if (companyToEdit) {
      setEditedData({ ...companyToEdit });
    }
  };

  const handleSave = (companyId, employeeId) => {
    dispatch(
      editCompanyDetails({ employeeId, companyId, updatedData: editedData })
    )
      .then(() => {
        dispatch(fetchAllCompanyDetails()); // Refresh the company details
        setEditingRowIndex(null);
        toast({ title: "Company details updated successfully!" });
      })
      .catch((error) => {
        console.error("Error saving company:", error);
        toast({
          title: "Error occurred while saving company details.",
          variant: "destructive",
        });
      });
  };

  const handleDelete = (companyId, employeeId) => {
    dispatch(deleteCompanyDetails({ employeeId, companyId }))
      .then((res) => {
        if (res?.payload?.success) {
          toast({ title: "Company details deleted successfully!" });
          dispatch(fetchAllCompanyDetails()); // Refresh company details after deletion
        } else {
          toast({
            title: "Failed to delete company details.",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting company:", error);
        toast({
          title: "Error occurred while deleting company.",
          variant: "destructive",
        });
      });
  };

  // Sorting the companies by createdAt in descending order (most recent first)
  const sortedCompanyDetails = companyDetails
    ?.flatMap((detail) => detail.companies || [])
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by `createdAt`

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
      <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
        <Tabs defaultValue="orders">
          <TabsContent value="orders">
            <Card className="w-full mx-auto my-4 p-4 bg-white shadow-md rounded-lg overflow-x-auto">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-xl font-semibold">
                  Company Details
                </CardTitle>
                <div className="mt-4 md:mt-0">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">All</option>
                    <option value="appointment">Appointment</option>
                    <option value="closed">Closed</option>
                    <option value="inprogress">In Progress</option>
                    <option value="cold">Cold</option>
                    <option value="new">New</option>
                  </select>
                </div>
              </CardHeader>

              <CardContent>
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">Company Name</th>
                      <th className="border p-2">Address</th>
                      <th className="border p-2">Phone No</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Packages</th>
                      <th className="border p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCompanyDetails?.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-2">
                          No company details available
                        </td>
                      </tr>
                    ) : (
                      sortedCompanyDetails
                        .filter((company) => company?.assignedfs === employeeName)
                        .filter(
                          (company) =>
                            statusFilter === "" ||
                            company.statusfs === statusFilter
                        )
                        .map((company) => (
                          <tr key={company._id}>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <input
                                  type="text"
                                  name="companyName"
                                  value={editedData.companyName}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                />
                              ) : (
                                company.companyName
                              )}
                            </td>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <input
                                  type="text"
                                  name="address"
                                  value={editedData.address}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                />
                              ) : (
                                company.address
                              )}
                            </td>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <input
                                  type="text"
                                  name="phoneNo"
                                  value={editedData.phoneNo}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                />
                              ) : (
                                company.phoneNo
                              )}
                            </td>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <select
                                  name="statusfs"
                                  value={editedData.statusfs}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                >
                                  <option value="">Select Status</option>
                                  <option value="appointment">Appointment</option>
                                  <option value="closed">Closed</option>
                                  <option value="inprogress">In Progress</option>
                                  <option value="cold">Cold</option>
                                  <option value="new">New</option>
                                </select>
                              ) : (
                                company.statusfs
                              )}
                            </td>

                            <td>
                              <Button
                                onClick={() =>
                                  navigate(`../assignpackages/${company._id}`)
                                }
                                className="bg-yellow-500 hover:bg-yellow-300"
                              >
                                Packages
                              </Button>
                            </td>

                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <Button
                                  onClick={() =>
                                    handleSave(company._id, company.employeeId)
                                  }
                                  className="bg-green-500 hover:bg-green-700"
                                >
                                  Save
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => handleEdit(company._id)}
                                  className="bg-blue-500 hover:bg-blue-700 mr-2"
                                >
                                  Edit
                                </Button>
                              )}
                              <Button
                                onClick={() =>
                                  handleDelete(company._id, company.employeeId)
                                }
                                className="bg-red-500 hover:bg-red-700"
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};


export default ViewFsData