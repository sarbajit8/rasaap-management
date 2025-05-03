import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../../components/ui/sheet';
import { addTerminate, deleteTerminate, editTerminate, getTerminationsByEmployeeId } from '../../store/common/termination-slice';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';
import { useParams } from 'react-router-dom';

const initialFormData = {
  title: '',
  content: '',
};

const AdminTerminate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { terminateList } = useSelector(state => state.terminate); // Get the termination list from Redux store

  useEffect(() => {
    dispatch(getTerminationsByEmployeeId(employeeId)); // Fetch terminations for the specific employee
  }, [dispatch, employeeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      employeeId,
      date: new Date().toISOString(),
    };

    if (currentEditedId) {
      dispatch(editTerminate({ id: currentEditedId, formData: payload })).then(res => {
        if (res?.payload?.success) {
          dispatch(getTerminationsByEmployeeId(employeeId)); // Refetch the updated list
          resetForm();
          toast({ title: "Termination updated successfully" });
        }
      });
    } else {
      dispatch(addTerminate(payload)).then(res => {
        if (res?.payload?.success) {
          dispatch(getTerminationsByEmployeeId(employeeId)); // Refetch the updated list
          resetForm();
          toast({ title: "Termination added successfully" });
        }
      });
    }
  };



   const handleDelete = (id) => {
      dispatch(deleteTerminate(id)).then(res => {
        if (res?.payload?.success) {
          dispatch(getTerminationsByEmployeeId(employeeId));
          toast({ title: "Warning deleted successfully" });
        }
      });
    };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentEditedId(null);
    setOpenDialog(false);
  };

  return (
    <Fragment>
      <div className="m-5 flex justify-between">
        <h1 className="text-xl font-bold">Employee Terminations</h1>
        <Button onClick={() => setOpenDialog(true)}>Add Termination</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {terminateList && terminateList.length > 0 ? (
          terminateList.map((termination) => (
            <Card key={termination?._id} className="w-full max-w-sm mx-auto shadow-md border rounded-xl m-6">
              <CardContent className="py-4 px-5">
                <h2 className="text-lg font-semibold mb-2 break-words max-w-[200px]">
                  {termination?.title}
                </h2>
                <p className="text-sm text-gray-700 mb-3 break-words max-w-[300px] whitespace-pre-line">
                  {termination?.content}
                </p>
                <p className="text-xs text-muted-foreground">{termination?.date?.split("T")[0]}</p>
              </CardContent>
              <CardFooter className="flex justify-between px-5 pb-4">
                <Button
                  size="sm"
                  onClick={() => {
                    setFormData({ title: termination?.title, content: termination?.content });
                    setCurrentEditedId(termination?._id);
                    setOpenDialog(true);
                  }}
                >
                  Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(termination?._id)}>
                         Delete
                       </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No terminations found.</p>
        )}
      </div>

      <Sheet open={openDialog} onOpenChange={resetForm}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{currentEditedId ? "Edit Termination" : "Add Termination"}</SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div>
              <label className="block font-medium text-sm">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Content</label>
              <textarea
                rows={4}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <Button type="submit">{currentEditedId ? "Update" : "Add"}</Button>
          </form>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminTerminate;
