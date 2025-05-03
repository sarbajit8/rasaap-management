import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEmployeeLeave,
  editLeave,
  getAllLeaveByEmployee,
  deleteLeave
} from '../../../store/common/leaveApplication-slice';
import { Button } from '../../../components/ui/button';
import { useToast } from '../../../hooks/use-toast';
import { Card, CardContent } from '../../../components/ui/card';
import { Trash2, Pencil } from "lucide-react";

const LeaveApplication = ({ editData, resetEdit }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { employeeLeaveByIdList } = useSelector(state => state.leave);
  const { user } = useSelector((state) => state.auth);
  const [editingId, setEditingId] = useState(null);


  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    title: '',
    application: '',
    leaveType: 'medical',
    leaveStatus: 'pending',
  });

  const [medicalLeave, setMedicalLeave] = useState(0);
  const [casualLeave, setCasualLeave] = useState(0);

  useEffect(() => {
    dispatch(getAllLeaveByEmployee(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title,
        application: editData.application,
        leaveType: editData.leaveType,
        leaveStatus: editData.leaveStatus,
      });
    }
  }, [editData]);

  useEffect(() => {
    if (!employeeLeaveByIdList || !Array.isArray(employeeLeaveByIdList)) return;

    let medical = 0;
    let casual = 0;
    employeeLeaveByIdList.forEach((leave) => {
      if (leave.leaveStatus === 'accepted') {
        if (leave.leaveType === 'medical') medical += 1;
        else if (leave.leaveType === 'casual') casual += 1;
      }
    });
    setMedicalLeave(medical);
    setCasualLeave(casual);
  }, [employeeLeaveByIdList]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isEdit = !!editingId;
  
    const updatedMedicalLeave =
      formData.leaveStatus === 'accepted' && formData.leaveType === 'medical'
        ? medicalLeave + 1
        : formData.leaveStatus !== 'accepted' && editData?.leaveStatus === 'accepted' && editData?.leaveType === 'medical'
        ? medicalLeave - 1
        : medicalLeave;
  
    const updatedCasualLeave =
      formData.leaveStatus === 'accepted' && formData.leaveType === 'casual'
        ? casualLeave + 1
        : formData.leaveStatus !== 'accepted' && editData?.leaveStatus === 'accepted' && editData?.leaveType === 'casual'
        ? casualLeave - 1
        : casualLeave;
  
    const payload = {
      ...formData,
      employeeId: user.id,
      employeeName: user.userName,
      date: new Date().toISOString(),
      medicalLeave: updatedMedicalLeave,
      casualLeave: updatedCasualLeave,
    };
  
    const action = isEdit
      ? editLeave({ id: editingId, formData: payload })
      : addEmployeeLeave(payload);
  
    dispatch(action).then((res) => {
      if (res?.payload?.success) {
        toast({ title: isEdit ? 'Leave updated' : 'Leave applied' });
        dispatch(getAllLeaveByEmployee(user.id));
        resetForm();
      }
    });
  };
  
  const handleDelete = (id) => {
    dispatch(deleteLeave(id)).then((res) => {
      if (res?.payload?.success) {
        toast({ title: "Leave deleted successfully" });
        dispatch(getAllLeaveByEmployee(user.id));
      }
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      application: '',
      leaveType: 'medical',
      leaveStatus: 'pending',
    });
    setEditingId(null); // ✅ reset editing state
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Application"
          rows={4}
          value={formData.application}
          onChange={(e) => setFormData({ ...formData, application: e.target.value })}
          className="w-full border p-2 rounded"
          required
        />
        <select
          value={formData.leaveType}
          onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="medical">Medical Leave</option>
          <option value="casual">Casual Leave</option>
        </select>

        <div className="flex gap-4 text-sm text-gray-600">
          <span>Medical: {medicalLeave}</span>
          <span>Casual: {casualLeave}</span>
        </div>

        <Button type="submit">{editData ? "Update Leave" : "Apply Leave"}</Button>
      </form>

      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center">
  {[...employeeLeaveByIdList]?.sort((a, b) => new Date(b.date) - new Date(a.date)).map((leave) => (
    <Card key={leave._id} className="w-full max-w-sm">
      <CardContent className="p-4 space-y-2">
        <h2 className="text-lg font-semibold break-words">{leave.title}</h2>
        <p className="break-words">{leave.application}</p>
        <div className="text-sm text-gray-600">
          Type: <span className="capitalize">{leave.leaveType}</span> | Status:{" "}
          <span className={`font-semibold ${
            leave.leaveStatus === "accepted"
              ? "text-green-600"
              : leave.leaveStatus === "rejected"
              ? "text-red-600"
              : "text-yellow-600"
          }`}>
            {leave.leaveStatus}
          </span>
          {leave?.reply&&
          <p className=' break-words'><b>Reply:</b>{leave?.reply}</p>
  }
        </div>

        {leave.leaveStatus === "pending" && (
          <div className="flex justify-end gap-2 pt-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setFormData({
                  title: leave.title,
                  application: leave.application,
                  leaveType: leave.leaveType,
                  leaveStatus: leave.leaveStatus,
                });
                setEditingId(leave._id);
              }}
            >
              <Pencil className="w-4 h-4 mr-1" /> Edit
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleDelete(leave._id)}
            >
              <Trash2 className="w-4 h-4 mr-1" /> Delete
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  ))}
</div>

    </div>
  );
};

export default LeaveApplication;
