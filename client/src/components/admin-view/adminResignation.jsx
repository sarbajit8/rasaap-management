import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllEmployeeResignations,
  updateResignationReplyById,
} from '../../store/common/resignation-slice';
import { Card, CardContent } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';
import { Button } from '../../components/ui/button';

const AdminResignation = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { employeeResignationList, isLoading } = useSelector((state) => state.resignation);
  const [replies, setReplies] = useState({}); // Local reply text state

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    dispatch(fetchAllEmployeeResignations());
  }, [dispatch]);

  const handleReplySubmit = (id) => {
    const reply = replies[id];
    if (!reply?.trim()) return;

    dispatch(updateResignationReplyById({ id, reply })).then((res) => {
      if (res?.payload?.success) {
        toast({ title: 'Reply submitted' });
        dispatch(fetchAllEmployeeResignations());
      }
    });
  };

  // Filter the resignations based on employee name and title
  const filteredResignations = employeeResignationList.filter((resignation) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      resignation.employeeName.toLowerCase().includes(lowercasedSearchTerm) ||
      resignation.title.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">All Resignation Applications</h2>

      {/* Search bar for filtering */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Employee Name or Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {isLoading ? (
        <p>Loading resignation applications...</p>
      ) : filteredResignations?.length === 0 ? (
        <p>No resignation applications found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResignations.map((resignation) => (
            <Card key={resignation._id} className="w-full">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold break-words">{resignation.title}</h3>
                <p className="break-words text-sm">{resignation.application}</p>
                <p className="text-xs text-gray-500">
                  Employee: {resignation.employeeName} | Date: {new Date(resignation.date).toLocaleDateString()}
                </p>

                <p className="text-xs text-gray-400">
                  Applied on: {new Date(resignation.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminResignation;
