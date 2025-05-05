import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state of the AddImage slice
const initialState = {
  isLoading: false,
  imageList: [],
};

// Async thunk to add a new image
export const addNewImage = createAsyncThunk(
  "/admin/addNewImage",
  async (formData) => {
    const result = await axios.post(
      `http://localhost:3000/api/admin/addImage/add`, // Adjust the API URL for adding image
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

// Async thunk to fetch all images
export const fetchAllImages = createAsyncThunk(
  "/admin/fetchAllImages",
  async () => {
    const result = await axios.get(
      `http://localhost:3000/api/admin/addImage/fetch` // Adjust the API URL for fetching images
    );

    return result?.data;
  }
);

// Async thunk to delete an image by ID
export const deleteImage = createAsyncThunk(
  "/admin/deleteImage",
  async (id) => {
    const result = await axios.delete(
        `http://localhost:3000/api/admin/addImage/delete/${id}` // Adjust the API URL for deleting an image
    );

    return result?.data;
  }
);

// Async thunk to edit an image by ID
export const editImage = createAsyncThunk(
    "/admin/editImage",
    async ({ id, updatedData }) => {
      const result = await axios.put(
        `http://localhost:3000/api/admin/addImage/edit/${id}`, // Adjust API endpoint
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return result?.data;
    }
  );
  

// Define the slice for AddImage
const AdminImagesSlice = createSlice({
  name: "adminImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle adding a new image
    builder
      .addCase(addNewImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.imageList.push(action.payload.data); // Add the new image to the list
      })
      .addCase(addNewImage.rejected, (state) => {
        state.isLoading = false;
      });

    // Handle fetching all images
    builder
      .addCase(fetchAllImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.imageList = action.payload.data; // Update the image list with fetched data
      })
      .addCase(fetchAllImages.rejected, (state) => {
        state.isLoading = false;
        state.imageList = [];
      });

    // Handle deleting an image

  },
});

// Export the reducer
export default AdminImagesSlice.reducer;
