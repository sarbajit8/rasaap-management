import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllImages,
  addNewImage,
  deleteImage,
  editImage,
} from "../../store/admin/AddImage-slice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import CommonForm from "../../components/common/Form";
import { imageFormControls } from "../../config";
import { useToast } from "../../hooks/use-toast";
import { Dialog } from "../../components/ui/dialog";
import ProductImageUpload from "./image-upload";
import { Download } from "lucide-react"; // Assuming lucide-react or similar icon package

const initialFormData = {
  name: "",
  image: "",
};

const AddImages = () => {
  const dispatch = useDispatch();
  const { imageList, isLoading } = useSelector((state) => state.addImage);
  const [openSheet, setOpenSheet] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { toast } = useToast();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);

  useEffect(() => {
    dispatch(fetchAllImages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      name: formData.name,
      image: uploadedImageUrl || formData.image,
    };

    if (isEditing) {
      dispatch(editImage({ id: editingId, updatedData: finalData })).then(() => {
        dispatch(fetchAllImages());
        toast({ title: "Image updated successfully" });
        resetForm();
      });
    } else {
      dispatch(addNewImage(finalData)).then(() => {
        dispatch(fetchAllImages());
        toast({ title: "Image added successfully" });
        resetForm();
      });
    }
  };

  const handleEdit = (image) => {
    setFormData({ name: image.name, image: image.image });
    setUploadedImageUrl(image.image);
    setEditingId(image._id);
    setIsEditing(true);
    setOpenSheet(true);
  };

  const handleDelete = () => {
    if (imageToDelete) {
      dispatch(deleteImage(imageToDelete._id)).then(() => {
        dispatch(fetchAllImages());
        toast({ title: "Image deleted" });
        setShowDeleteDialog(false);
        setImageToDelete(null);
      });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setUploadedImageUrl("");
    setIsEditing(false);
    setEditingId(null);
    setOpenSheet(false);
  };


useEffect(() => {
  dispatch(fetchAllImages());

}, [dispatch])




  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-indigo-600">🖼️ Manage Images</h2>
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={() => {
            resetForm();
            setOpenSheet(true);
          }}
        >
          Add New Image
        </Button>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading images...</p>
      ) : imageList.length === 0 ? (
        <p className="text-gray-400 italic">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageList.map((img) => (
            <div
              key={img._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={img.image}
                alt={img.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-indigo-700">{img.name}</h3>
                  <a href={img.image} download className="text-indigo-500 hover:text-indigo-700">
                    <Download size={20} />
                  </a>
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    className="text-indigo-600 border-indigo-600 hover:bg-indigo-100"
                    onClick={() => handleEdit(img)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setShowDeleteDialog(true);
                      setImageToDelete(img);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>{isEditing ? "Edit Image" : "Add New Image"}</SheetTitle>
          </SheetHeader>
          <div className="py-6">
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState={imageLoadingState}
            />
            <CommonForm
              formControls={imageFormControls}
              buttonText={isEditing ? "Update Image" : "Add Image"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
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
                Are you sure you want to delete <b>{imageToDelete?.name}</b>?
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

export default AddImages;
