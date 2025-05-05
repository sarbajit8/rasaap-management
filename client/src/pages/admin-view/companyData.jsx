import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompanyDetails,
  fetchAllCompanyDetails,
  editCompanyDetails,
  deleteCompanyDetails,
} from "../../store/tstl/adddata-slice";
import { useToast } from "../../hooks/use-toast";
import { fetchAllUsers } from "../../store/auth-slice";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Tabs, TabsContent } from "../../components/ui/tabs";
import { PenBox, Save, Trash2Icon } from "lucide-react";

const CompanyData = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { companyDetails } = useSelector((state) => state.adddata);
  const { user, allUsers } = useSelector((state) => state.auth);
  const employeeName = user?.userName;
  const employeeId = user?.id;

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
      assigned: "",
      statusfs: "",
      status: "",
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
        assigned: "",
        status: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty required fields
    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];
      if (!form.companyName || !form.address || !form.phoneNo || !form.type) {
        toast({ title: "Please fill in all required fields.", variant: "destructive" });
        return; // Stop the form submission if any required field is empty
      }
    }

    // If all required fields are filled, submit the data
    const dataToSubmit = forms.map((form) => ({
      ...form,
      employeeId,
      employeeName,
    }));

    dispatch(addCompanyDetails({ employeeId, employeeName, companies: dataToSubmit })).then((res) => {
      if (res?.payload?.success) {
        toast({ title: "Companies added successfully!" });
        dispatch(fetchAllCompanyDetails()); // Refresh company details after adding
        setForms([{
          companyName: '',
          address: '',
          phoneNo: '',
          type: '',
          assignedfs: '',
          assigned: '',
          statusfs: '',
          status: '', // Default status is ''
        }]); // Reset form after submission
      } else {
        console.error('Error:', res.payload); // Log error if present
      }
    });
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
    ?.flatMap((detail) => detail?.companies || [])
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by `createdAt`

  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
      <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Company Details</h2>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {forms.map((form, index) => (
            <div key={index} className="space-y-4 border p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Company {index + 1}</h3>
                <div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveForm(index)}
                      className="text-red-500 hover:text-red-700 text-2xl px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-200"
                    >
                      -
                    </button>
                  )}
                  {index === forms.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddForm}
                      className="text-green-500 hover:text-green-700 text-2xl px-4 py-2 ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={form.companyName}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  name="phoneNo"
                  placeholder="Phone Number"
                  value={form.phoneNo}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                />
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  value={form.type}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                />
                <select
                  name="assignedfs"
                  value={form.assignedfs}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                >
                  <option value="">Assigned Field Sales</option>
                  {allUsers && allUsers.filter(user => user.role === "fs").map((user) => (
                    <option key={user._id} value={user.userName}>{user.userName}</option>
                  ))}
                </select>

                <select
                  name="statusfs"
                  value={form.statusfs}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                >
                  <option value="">Select Field Status</option>
                  <option value="closed">Closed</option>
                  <option value="lost">Lost</option>
                  <option value="new">New</option>
                  <option value="inprogress">In Progress</option>
                </select>

                <select
                  name="assigned"
                  value={form.assigned}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                >
                  <option value="">Assigned Tele Sales</option>
                  {allUsers && allUsers.filter(user => user.role === "ts").map((user) => (
                    <option key={user._id} value={user.userName}>{user.userName}</option>
                  ))}
                </select>

                <select
                  name="status"
                  value={form.status}
                  onChange={(e) => handleInputChange(index, e)}
                  className="border rounded p-2"
                >
                  <option value="">Select Tele Status</option>
                  <option value="appoinment">Appoinment</option>
                    <option value="closed">Closed</option>
                     <option value="cold">Cold</option>
                       <option value="new">New</option>
                         <option value="inprogress">In Progress</option>
                </select>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <Tabs defaultValue="orders">
          <TabsContent value="orders">
            <Card className="w-full mx-auto my-4 p-4 bg-white shadow-md rounded-lg overflow-x-auto">
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-xl font-semibold">Company Details</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="overflow-x-auto max-h-[400px]">
                  <table className="min-w-full table-auto border-collapse">
                    <thead className="sticky top-0 bg-gray-200 z-10">
                      <tr>
                        <th className="border p-2">Company Name</th>
                        <th className="border p-2">Address</th>
                        <th className="border p-2">Phone No</th>
                        <th className="border p-2">Tele Status</th>
                        <th className="border p-2">Tele Assigned</th>
                        <th className="border p-2">Field Status</th>
                        <th className="border p-2">Field Assigned</th>
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
                        sortedCompanyDetails.map((company) => (
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
                                  name="status"
                                  value={editedData.status}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                >
                                  <option value="">Select Status</option>
                                  <option value="appoinment">Appoinment</option>
                                  <option value="closed">Closed</option>
                                  <option value="cold">Cold</option>
                                  <option value="new">New</option>
                                  <option value="inprogress">In Progress</option>
                                </select>
                              ) : (
                                company.status
                              )}
                            </td>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <select
                                  name="assigned"
                                  value={editedData.assigned}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                >
                                  <option value="">Select Assigned</option>
                                  {allUsers && allUsers.filter(user => user.role === "ts").map((user) => (
                                    <option key={user._id} value={user.userName}>{user.userName}</option>
                                  ))}
                                </select>
                              ) : (
                                company.assigned
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
                                  <option value="closed">Closed</option>
                                  <option value="lost">Lost</option>
                                  <option value="new">New</option>
                                  <option value="inprogress">In Progress</option>
                                </select>
                              ) : (
                                company.statusfs
                              )}
                            </td>
                            <td className="border p-2">
                              {editingRowIndex === company._id ? (
                                <select
                                  name="assignedfs"
                                  value={editedData.assignedfs}
                                  onChange={handleInputChangeEdit}
                                  className="border rounded p-2"
                                >
                                  <option value="">Select Assigned</option>
                                  {allUsers && allUsers.filter(user => user.role === "fs").map((user) => (
                                    <option key={user._id} value={user.userName}>{user.userName}</option>
                                  ))}
                                </select>
                              ) : (
                                company.assignedfs
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
                                <button
                                  onClick={() =>
                                    handleSave(company._id, company.employeeId)
                                  }
                                  className="text-green-500 hover:text-green-700"
                                >
                                  <Save />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEdit(company._id)}
                                  className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                  <PenBox />
                                </button>
                              )}
                              <button
                                onClick={() =>
                                  handleDelete(company._id, company.employeeId)
                                }
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2Icon />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyData;
