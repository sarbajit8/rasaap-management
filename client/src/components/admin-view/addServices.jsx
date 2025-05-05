import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, fetchAllServices, editService, deleteService } from '../../store/admin/services-slice'; // adjust path if needed
import { useToast } from '../../hooks/use-toast'; // adjust based on your toast setup

const AddServices = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Fetch services and loading/error state from Redux store
  const { services, isLoading, error } = useSelector((state) => state.service); // adjust the state path if needed

  // Local state for adding and editing services
  const [newService, setNewService] = useState('');
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editedServiceName, setEditedServiceName] = useState('');

  
  // Handle adding a new service
  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.trim()) {
      dispatch(addService({ name: newService }))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: 'Service added successfully!' });
            setNewService('');
          }
        })
        .catch((error) => {
          toast({ title: 'Failed to add service.', variant: 'destructive' });
        });
    }
  };

  // Handle editing a service
  const handleEditService = (id, name) => {
    setEditingServiceId(id);
    setEditedServiceName(name);

  };

  // Handle saving the edited service
  const handleSaveService = (e) => {
    e.preventDefault();
    if (editedServiceName.trim()) {
      dispatch(editService({ id: editingServiceId, updatedData: { name: editedServiceName } }))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: 'Service updated successfully!' });
            setEditingServiceId(null); // Stop editing
            setEditedServiceName('');
            dispatch(fetchAllServices());

          }
        })
        .catch((error) => {
          toast({ title: 'Failed to update service.', variant: 'destructive' });
        });
    }
  };

  // Handle deleting a service
  const handleDeleteService = (id) => {
    dispatch(deleteService(id))
      .then((res) => {
        dispatch(fetchAllServices());

        if (res?.payload?.success) {
          toast({ title: 'Service deleted successfully!' });
          dispatch(fetchAllServices());

        } else {
          toast({ title: 'Failed to delete service.', variant: 'destructive' });
        }
      })
      .catch((error) => {
        toast({ title: 'Error occurred while deleting service.', variant: 'destructive' });
      });
  };

  // Fetch all services on component mount
  useEffect(() => {
    dispatch(fetchAllServices());
  }, [dispatch]);


  return (
    <div className="space-y-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Services</h2>

      {/* Form to Add a New Service */}
      <form onSubmit={handleAddService} className="space-y-4">
        <input
          type="text"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          placeholder="Enter new service"
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add Service
        </button>
      </form>

      {/* Display Services in a Table */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">Service Details</h3>
        <table className="min-w-max table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Service Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            // isLoading ?
            //  (
            //   <tr>
            //     <td colSpan="2" className="text-center py-2">Loading...</td>
            //   </tr>
            // ) : services.length === 0 ? (
            //   <tr>
            //     <td colSpan="2" className="text-center py-2">No services available</td>
            //   </tr>
            // )
            //  : 
            (
              services.map((service) => (
                <tr key={service._id}>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingServiceId === service._id ? (
                      <input
                        type="text"
                        value={editedServiceName}
                        onChange={(e) => setEditedServiceName(e.target.value)}
                        className="border rounded p-2"
                      />
                    ) : (
                      service.name
                    )}
                  </td>
                  <td className="border p-2">
                    {/* {editingServiceId === service._id ? (
                      <button
                        onClick={handleSaveService}
                        className="text-green-500 hover:text-green-700 mr-2"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditService(service._id, service.name)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </button>
                    )} */}
                    <button
                      onClick={() => handleDeleteService(service._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
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

export default AddServices;
