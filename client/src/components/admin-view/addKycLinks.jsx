import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKycLink, fetchKycLinks, editKycLink, deleteKycLink } from '../../store/admin/kyclink-slice'; // Adjust the path if needed
import { useToast } from '../../hooks/use-toast'; // Adjust based on your toast setup
import { Button } from '../ui/button';

const AddKycLinks = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // Fetch KycLinks and loading/error state from Redux store
  const { kycLinks, isLoading, error } = useSelector((state) => state.kycLink); // Adjust the state path if needed
  const { services } = useSelector((state) => state.service); // adjust the state path if needed

  // Local state for adding and editing KycLinks
  const [newKycLink, setNewKycLink] = useState({
    name: '',
    service: '',
    link: '',
  });

  const [editingKycLinkId, setEditingKycLinkId] = useState(null);
  const [editedKycLinkData, setEditedKycLinkData] = useState(newKycLink);

  // Fetch all KycLinks on component mount
  useEffect(() => {
    dispatch(fetchKycLinks());
  }, [dispatch]);

  // Handle adding a new KycLink
  const handleAddKycLink = (e) => {
    e.preventDefault();
    if (newKycLink.name.trim() && newKycLink.service.trim() && newKycLink.link.trim()) {
      dispatch(addKycLink(newKycLink))
        .then((res) => {
            toast({ title: 'KYC Link added successfully!' });
            dispatch(fetchKycLinks()); // Refresh the KYC Links list
            setNewKycLink({
                name: '',
                service: '',
                link: '',
              });
          if (res?.payload?.success) {
            setNewKycLink({
              name: '',
              service: '',
              link: '',
            });
          }
        })
        .catch((error) => {
          toast({ title: 'Failed to add KYC Link.', variant: 'destructive' });
        });
    }
  };
  

  // Handle editing a KycLink
  const handleEditKycLink = (id, data) => {
    setEditingKycLinkId(id);
    setEditedKycLinkData(data);
  };

// Handle saving the edited KycLink
const handleSaveKycLink = (e) => {
    e.preventDefault();
    if (editedKycLinkData.name.trim() && editedKycLinkData.service.trim() && editedKycLinkData.link.trim()) {
        // console.log(editingKycLinkId,editedKycLinkData,"kllllllllllllllllllllll");
        
      dispatch(editKycLink({ id: editingKycLinkId, updatedData: editedKycLinkData }))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: 'KYC Link updated successfully!' });
            // Reset the state to stop editing
            setEditingKycLinkId(null);
            setEditedKycLinkData({ name: '', service: '', link: '' }); // Clear the form fields after save
          } else {
            toast({ title: 'Failed to update KYC Link.', variant: 'destructive' });
          }
        })
        .catch((error) => {
          toast({ title: 'Error while updating KYC Link.', variant: 'destructive' });
        });
    }
  };
  
  
  // Handle deleting a KycLink
  const handleDeleteKycLink = (id) => {
    dispatch(deleteKycLink(id))
      .then((res) => {
        if (res?.payload?.success) {
          toast({ title: 'KYC Link deleted successfully!' });
          dispatch(fetchKycLinks()); // Refresh the KYC Links list
        } else {
            toast({ title: 'KYC Link deleted successfully!' });
        }
      })
      .catch((error) => {
        toast({ title: 'KYC Link deleted successfully!' });
    });
  };
  useEffect(() => {
    dispatch(fetchKycLinks()); // Refresh the KYC Links list

  }, [dispatch])
  

  return (
    <div className="space-y-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add KYC Links</h2>

      {/* Form to Add a New KYC Link */}
      <form onSubmit={handleAddKycLink} className="space-y-4">
        <input
          type="text"
          value={newKycLink.name}
          onChange={(e) => setNewKycLink({ ...newKycLink, name: e.target.value })}
          placeholder="Link Name"
          className="border rounded p-2 w-full"
        />

        {/* <input
          type="text"
          value={newKycLink.service}
          onChange={(e) => setNewKycLink({ ...newKycLink, service: e.target.value })}
          placeholder="Service"
          className="border rounded p-2 w-full"
        /> */}

<select
          value={newKycLink.service}
          onChange={(e) => setNewKycLink({ ...newKycLink, service: e.target.value })}
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
          type="text"
          value={newKycLink.link}
          onChange={(e) => setNewKycLink({ ...newKycLink, link: e.target.value })}
          placeholder="Link URL"
          className="border rounded p-2 w-full"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add KYC Link
        </button>
      </form>

      {/* Display KYC Links in a Table */}
      <div className="mt-8 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">KYC Link Details</h3>
        <table className="min-w-max table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Link Name</th>
              <th className="border p-2">Service</th>
              <th className="border p-2">Link URL</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-2">Loading...</td>
              </tr>
            ) : kycLinks.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-2">No KYC links available</td>
              </tr>
            ) : (
              kycLinks.map((kycLink) => (
                <tr key={kycLink._id}>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingKycLinkId === kycLink._id ? (
                      <input
                        type="text"
                        value={editedKycLinkData.name}
                        onChange={(e) => setEditedKycLinkData({ ...editedKycLinkData, name: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      kycLink.name
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingKycLinkId === kycLink._id ? (
                      <input
                        type="text"
                        value={editedKycLinkData.service}
                        onChange={(e) => setEditedKycLinkData({ ...editedKycLinkData, service: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      kycLink.service
                    )}
                  </td>
                  <td className="border p-2 break-words max-w-[200px]">
                    {editingKycLinkId === kycLink._id ? (
                      <input
                        type="text"
                        value={editedKycLinkData.link}
                        onChange={(e) => setEditedKycLinkData({ ...editedKycLinkData, link: e.target.value })}
                        className="border rounded p-2"
                      />
                    ) : (
                      kycLink.link
                    )}
                  </td>
                  <td className="border p-2">
                    {/* {editingKycLinkId === kycLink._id ? (
                      <Button
                        onClick={handleSaveKycLink}
                        className="bg-green-500 hover:bg-green-700"
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleEditKycLink(kycLink._id, kycLink)}
                        className="bg-blue-500 hover:bg-blue-700 mr-2"
                      >
                        Edit
                      </Button>
                    )} */}
                    <Button
                      onClick={() => handleDeleteKycLink(kycLink._id)}
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
      </div>
    </div>
  );
};

export default AddKycLinks;
