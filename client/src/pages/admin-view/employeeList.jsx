import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  registerUser,
  deleteUser,
  updateUser,
} from "../../store/auth-slice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import CommonForm from "../../components/common/Form";
import { registerFormControls } from "../../config/index";
import { useToast } from "../../hooks/use-toast";
import { Dialog } from "../../components/ui/dialog";
import { Link } from "react-router-dom";

const initialFormData = {
  userName: "",
  email: "",
  role: "",
  password: "",
};

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { allUsers, isLoading, error } = useSelector((state) => state.auth);
  const [openSheet, setOpenSheet] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { toast } = useToast();

  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const normalize = (text) => text?.replace(/\s+/g, "").toLowerCase() || "";

  const employees = allUsers
    .filter((user) => user.role !== "admin")
    .filter((user) => {
      const userName = normalize(user.userName);
      const role = normalize(user.role);
      const search = normalize(searchTerm);
      return userName.includes(search) || role.includes(search);
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateUser({ id: editingId, updatedData: formData })).then(() => {
        dispatch(fetchAllUsers());
        setOpenSheet(false);
        setIsEditing(false);
        setFormData(initialFormData);
        toast({ title: "Employee updated successfully" });
      });
    } else {
      dispatch(registerUser(formData)).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllUsers());
          toast({ title: "Registration successful" });
        } else {
          toast({ title: data?.payload?.message });
        }
        setOpenSheet(false);
        setFormData(initialFormData);
      });
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingId(user._id);
    setIsEditing(true);
    setOpenSheet(true);
  };

  const handleDelete = () => {
    if (userToDelete) {
      dispatch(deleteUser(userToDelete._id)).then(() => {
        dispatch(fetchAllUsers());
        toast({ title: "User deleted" });
        setShowDeleteDialog(false);
        setUserToDelete(null);
      });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-indigo-600">👥 Employee List</h2>
        <input
          type="text"
          placeholder="Search by name or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-5 w-full flex justify-end">
        <Button
          className="bg-pink-500 hover:bg-pink-600"
          onClick={() => {
            setOpenSheet(true);
            setIsEditing(false);
            setFormData(initialFormData);
          }}
        >
          Add New Employee
        </Button>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading employees...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : employees.length === 0 ? (
        <p className="text-gray-400 italic">No employees found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {employees.map((emp) => (
        <div
        key={emp._id}
        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">{emp.userName}</h3>
          <p className="text-sm text-gray-600 mb-2">Email: {emp.email}</p>
          <p className="text-sm text-gray-600 mb-2">Password: {emp.password}</p>
          <p className="text-sm text-gray-600 font-medium"><b>Role:</b> {emp.role || "N/A"}</p>
        </div>
      
        {/* Action Buttons Section */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between gap-2">
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-100 transition duration-200"
              onClick={() => handleEdit(emp)}
            >
              Edit
            </Button>
            <Button
              variant="destructive"
              className="w-full sm:w-auto bg-red-500 text-white hover:bg-red-600 transition duration-200"
              onClick={() => {
                setShowDeleteDialog(true);
                setUserToDelete(emp);
              }}
            >
              Delete
            </Button>
          </div>
      
          {/* Button section with "Warning" and "Terminate" side by side */}
          <div className="flex justify-center gap-4 mt-2">
            <Link to={`../warning/${emp._id}`}>
              <Button className="w-full sm:w-auto bg-pink-500 text-white hover:bg-pink-600 transition duration-200">
                Warning
              </Button>
            </Link>
            
          

          </div>
          <div className="flex justify-center gap-4 mt-2">
           
            
            {/* Terminate button */}
            <Link to={`../terminate/${emp._id}`}>

            <Button 
              className="w-full sm:w-auto bg-yellow-500 text-white hover:bg-yellow-600 transition duration-200"
            >
              Terminate
            </Button>
            </Link>

          </div>
        </div>
      </div>
      
        ))}
      </div>
      
      )}

      <Sheet open={openSheet} onOpenChange={() => setOpenSheet(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{isEditing ? "Edit Employee" : "Add New Employee"}</SheetTitle>
          </SheetHeader>
          <div className="py-6">
            <CommonForm
              formControls={registerFormControls}
              buttonText={isEditing ? "Update" : "Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>

      {showDeleteDialog && (
        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Deletion</h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete user <b>{userToDelete?.userName}</b>?
              </p>
              <div className="flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setShowDeleteDialog(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default EmployeeList;
