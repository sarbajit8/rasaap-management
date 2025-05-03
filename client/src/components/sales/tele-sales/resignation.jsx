import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEmployeeResignation,
  editEmployeeResignation,
  getAllResignationsByEmployee,
  deleteResignation,
} from '../../../store/common/resignation-slice';
import { Button } from '../../../components/ui/button';
import { useToast } from '../../../hooks/use-toast';
import { Card, CardContent } from '../../../components/ui/card';
import { Trash2, Pencil } from "lucide-react";

const Resignation = ({ editData, resetEdit }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { employeeResignationByIdList } = useSelector(state => state.resignation);
  const { user } = useSelector((state) => state.auth);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    title: '',
    application: '',
  });

  useEffect(() => {
    dispatch(getAllResignationsByEmployee(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title,
        application: editData.application,
      });
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEdit = !!editingId;

    const payload = {
      ...formData, // Add necessary fields
      employeeId: user.id,
      employeeName: user.userName,
      date: new Date().toISOString(), // Add the date
    };

    // Ensure that the formData has all the necessary fields before sending
    console.log("Payload for Resignation: ", payload);

    const action = isEdit
      ? editEmployeeResignation({ id: editingId, formData: payload })
      : addEmployeeResignation(payload);

    dispatch(action).then((res) => {
      if (res?.payload?.success) {
        toast({ title: isEdit ? 'Resignation updated' : 'Resignation submitted' });
        dispatch(getAllResignationsByEmployee(user.id));
        resetForm();
      }
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteResignation(id)).then((res) => {
      if (res?.payload?.success) {
        toast({ title: "Resignation deleted successfully" });
        dispatch(getAllResignationsByEmployee(user.id));
      }
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      application: '',
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
        <Button type="submit">{editData ? "Update Resignation" : "Submit Resignation"}</Button>
      </form>

      <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center">
        {[...employeeResignationByIdList]?.sort((a, b) => new Date(b.date) - new Date(a.date)).map((resignation) => (
          <Card key={resignation._id} className="w-full max-w-sm">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-lg font-semibold break-words">{resignation.title}</h2>
              <p className="break-words">{resignation.application}</p>
              <div className="text-sm text-gray-600">
                Date: <span className="font-semibold">{new Date(resignation.date).toLocaleDateString()}</span>
              </div>
            </CardContent>
            <div className="flex justify-end gap-2 pt-3 px-4">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setFormData({
                    title: resignation.title,
                    application: resignation.application,
                  });
                  setEditingId(resignation._id);
                }}
              >
                <Pencil className="w-4 h-4 mr-1" /> Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(resignation._id)}
              >
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resignation;
