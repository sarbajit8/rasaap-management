import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../../components/ui/sheet';
import { addWarning, deleteWarning, editWarning, getWarningsByEmployeeId } from '../../store/common/warning-slice';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { useToast } from '../../hooks/use-toast';
import { useParams } from 'react-router-dom';

const initialFormData = {
  title: '',
  content: '',
};

const AdminWarning = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { warningList } = useSelector(state => state.warning);

  useEffect(() => {
    dispatch(getWarningsByEmployeeId(employeeId));
  }, [dispatch, employeeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      employeeId,
      date: new Date().toISOString(),
    };

    if (currentEditedId) {
      dispatch(editWarning({ id: currentEditedId, formData: payload })).then(res => {
        if (res?.payload?.success) {
          dispatch(getWarningsByEmployeeId(employeeId));
          resetForm();
          toast({ title: "Warning updated successfully" });
        }
      });
    } else {
      dispatch(addWarning(payload)).then(res => {
        if (res?.payload?.success) {
          dispatch(getWarningsByEmployeeId(employeeId));
          resetForm();
          toast({ title: "Warning added successfully" });
        }
      });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteWarning(id)).then(res => {
      if (res?.payload?.success) {
        dispatch(getWarningsByEmployeeId(employeeId));
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
    <Fragment >
      <div className="m-5 flex justify-between">
        <h1 className="text-xl font-bold">Employee Warnings</h1>
        <Button onClick={() => setOpenDialog(true)}>Add Warning</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {warningList?.length > 0 ? warningList.map(warning => (
       <Card key={warning._id} className="w-full max-w-sm mx-auto shadow-md border rounded-xl m-6">
       <CardContent className="py-4 px-5">
         <h2 className="text-lg font-semibold mb-2 break-words max-w-[200px]">
           {warning.title}
         </h2>
         <p className="text-sm text-gray-700 mb-3 break-words max-w-[300px] whitespace-pre-line">
           {warning.content}
         </p>
         <p className="text-xs text-muted-foreground">{warning.date?.split("T")[0]}</p>
       </CardContent>
       <CardFooter className="flex justify-between px-5 pb-4">
         <Button
           size="sm"
           onClick={() => {
             setFormData({ title: warning.title, content: warning.content });
             setCurrentEditedId(warning._id);
             setOpenDialog(true);
           }}
         >
           Edit
         </Button>
         <Button size="sm" variant="destructive" onClick={() => handleDelete(warning._id)}>
           Delete
         </Button>
       </CardFooter>
     </Card>
     
        )) : <p>No warnings found.</p>}
      </div>

      <Sheet open={openDialog} onOpenChange={resetForm}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{currentEditedId ? "Edit Warning" : "Add Warning"}</SheetTitle>
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



export default AdminWarning