import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllEmployeeLeaves,
  updateEmployeeLeaveStatus,
  updateLeaveReplyById,
} from '../../store/common/leaveApplication-slice';
import { Card, CardContent } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';
import { Button } from '../../components/ui/button';

const AdminleaveApplication = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { employeeLeaveList, isLoading } = useSelector((state) => state.leave);
  const [replies, setReplies] = useState({}); // Local reply text state
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering

  useEffect(() => {
    dispatch(fetchAllEmployeeLeaves());
  }, [dispatch]);

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateEmployeeLeaveStatus({ id, leaveStatus: newStatus })).then((res) => {
      if (res?.payload?.success) {
        toast({ title: 'Leave status updated' });
        dispatch(fetchAllEmployeeLeaves());
      }
    });
  };

  const handleReplySubmit = (id) => {
    const reply = replies[id];
    if (!reply?.trim()) return;

    dispatch(updateLeaveReplyById({ id, reply })).then((res) => {
      if (res?.payload?.success) {
        toast({ title: 'Reply submitted' });
        dispatch(fetchAllEmployeeLeaves());
      }
    });
  };

  // Filter the employee leaves based on employee name or title
  const filteredLeaves = employeeLeaveList.filter((leave) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return (
      leave.employeeName.toLowerCase().includes(lowercasedSearchTerm) ||
      leave.title.toLowerCase().includes(lowercasedSearchTerm)
    );
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">All Leave Applications</h2>

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
        <p>Loading leave applications...</p>
      ) : filteredLeaves?.length === 0 ? (
        <p>No leave applications found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLeaves.map((leave) => (
            <Card key={leave._id} className="w-full">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold break-words">{leave.title}</h3>
                <p className="break-words text-sm">{leave.application}</p>
                <p className="text-xs text-gray-500">
                  Employee: {leave.employeeName} | Type: <span className="capitalize">{leave.leaveType}</span>
                </p>

                <div className="text-sm text-gray-600 flex items-center gap-2">
                  Status:
                  <select
                    value={leave.leaveStatus}
                    onChange={(e) => handleStatusChange(leave._id, e.target.value)}
                    className="border px-2 py-1 rounded text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* 📨 Reply Section */}
                <div className="space-y-2 pt-2">
                  <textarea
                    rows={3}
                    value={replies[leave._id] ?? leave.reply ?? ''}
                    onChange={(e) =>
                      setReplies((prev) => ({ ...prev, [leave._id]: e.target.value }))
                    }
                    placeholder="Write a reply..."
                    className="w-full border rounded p-2 text-sm"
                  />
                  <div className="text-right">
                    <Button
                      size="sm"
                      onClick={() => handleReplySubmit(leave._id)}
                      disabled={!replies[leave._id]?.trim()}
                    >
                      Save Reply
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-gray-400">
                  Applied on: {new Date(leave.date).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminleaveApplication;
