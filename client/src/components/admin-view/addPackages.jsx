import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPackage, fetchAllPackages, editPackage, deletePackage } from '../../store/admin/packages-slice'; // adjust path if needed
import { fetchAllServices } from '../../store/admin/services-slice'; // Adjust path based on your setup
import { useToast } from '../../hooks/use-toast'; // adjust based on your toast setup
import { Button } from '../ui/button';

const AddPackages = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Fetch packages and loading/error state from Redux store
  const { packages, isLoading, error } = useSelector((state) => state.package); // adjust the state path if needed
  const { services } = useSelector((state) => state.service); // adjust the state path if needed

  // Local state for adding and editing packages
  const [newPackage, setNewPackage] = useState({
    name: '',
    service: '',
    price: '',
    discount: '',
    description: '', // Ensure description is part of the new package state
    duration: '',
    date: ''
  });

  const [editingPackageId, setEditingPackageId] = useState(null);
  const [editedPackageData, setEditedPackageData] = useState(newPackage);

  // Fetch all packages and services on component mount
  useEffect(() => {
    dispatch(fetchAllPackages());
    dispatch(fetchAllServices());  // Fetch all services from the store
  }, [dispatch]);

  // Handle adding a new package
  const handleAddPackage = (e) => {
    e.preventDefault();
    if (newPackage.name.trim() && newPackage.service.trim()) {
      dispatch(addPackage(newPackage))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: 'Package added successfully!' });
            setNewPackage({
              name: '',
              service: '',
              price: '',
              discount: '',
              description: '', // Reset description field as well
              duration: '',
              date: ''
            });
          }
        })
        .catch((error) => {
          toast({ title: 'Failed to add package.', variant: 'destructive' });
        });
    }
  };

  // Handle editing a package
  const handleEditPackage = (id, data) => {
    setEditingPackageId(id);
    setEditedPackageData(data);
  };

  // Handle saving the edited package
  const handleSavePackage = (e) => {
    e.preventDefault();
    if (editedPackageData.name.trim() && editedPackageData.service.trim()) {
      dispatch(editPackage({ id: editingPackageId, updatedData: editedPackageData }))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: 'Package updated successfully!' });
            setEditingPackageId(null); // Stop editing
            setEditedPackageData(newPackage); // Reset edited data
            dispatch(fetchAllPackages()); // Refresh the package list
          }
        })
        .catch((error) => {
          toast({ title: 'Failed to update package.', variant: 'destructive' });
        });
    }
  };

  // Handle deleting a package
  const handleDeletePackage = (id) => {
    dispatch(deletePackage(id))
      .then((res) => {
        if (res?.payload?.success) {
          toast({ title: 'Package deleted successfully!' });
          dispatch(fetchAllPackages()); // Refresh the package list
        } else {
          toast({ title: 'Failed to delete package.', variant: 'destructive' });
        }
      })
      .catch((error) => {
        toast({ title: 'Error occurred while deleting package.', variant: 'destructive' });
      });
  };

  return (
    <div className="space-y-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Packages</h2>

      {/* Form to Add a New Package */}
      <form onSubmit={handleAddPackage} className="space-y-4">
        <input
          type="text"
          value={newPackage.name}
          onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
          placeholder="Package Name"
          className="border rounded p-2 w-full"
        />
        
        {/* Service Select Dropdown */}
        <select
          value={newPackage.service}
          onChange={(e) => setNewPackage({ ...newPackage, service: e.target.value })}
          className="border rounded p-2 w-full"
        >
          <option value="" disabled>Select Service</option>
          {services && services.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={newPackage.price}
          onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
          placeholder="Price"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          value={newPackage.discount}
          onChange={(e) => setNewPackage({ ...newPackage, discount: e.target.value })}
          placeholder="Discount"
          className="border rounded p-2 w-full"
        />
        <textarea
          value={newPackage.description}
          onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
          placeholder="Description"
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          value={newPackage.duration}
          onChange={(e) => setNewPackage({ ...newPackage, duration: e.target.value })}
          placeholder="Duration (in days)"
          className="border rounded p-2 w-full"
        />
        <input
          type="date"
          value={newPackage.date}
          onChange={(e) => setNewPackage({ ...newPackage, date: e.target.value })}
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add Package
        </button>
      </form>

      {/* Display Packages in a Table */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">Package Details</h3>
        <table className="min-w-max table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Package Name</th>
              <th className="border p-2">Service</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Discount</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7" className="text-center py-2">Loading...</td>
              </tr>
            ) : packages.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-2">No packages available</td>
              </tr>
            ) : (
              packages.map((pkg) => (
                <tr key={pkg._id}>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <input
                        type="text"
                        value={editedPackageData.name}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, name: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      pkg.name
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <select
                        value={editedPackageData.service}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, service: e.target.value })}
                        className="border rounded p-2"
                      >
                        {services && services.map((service) => (
                          <option key={service._id} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      pkg.service
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <input
                        type="number"
                        value={editedPackageData.price}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, price: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      pkg.price
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <input
                        type="text"
                        value={editedPackageData.discount}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, discount: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      pkg.discount
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <input
                        type="number"
                        value={editedPackageData.duration}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, duration: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      pkg.duration
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingPackageId === pkg._id ? (
                      <textarea
                        value={editedPackageData.description}
                        onChange={(e) => setEditedPackageData({ ...editedPackageData, description: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      pkg.description
                    )}
                  </td>
                  <td className="border p-2">
                    {editingPackageId === pkg._id ? (
                      <Button
                        onClick={handleSavePackage}
                        className="bg-green-500 hover:bg-green-700"
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleEditPackage(pkg._id, pkg)}
                        className="bg-blue-500 hover:bg-blue-700 mr-2"
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      onClick={() => handleDeletePackage(pkg._id)}
                      className="bg-red-500 bg:text-red-700"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPackages;
