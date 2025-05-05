import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state of the KycLink slice
const initialState = {
  kycLinks: [],
  loading: false,
  error: null,
};

// Async thunk to fetch KYC links
export const fetchKycLinks = createAsyncThunk(
  "kycLinks/fetchKycLinks",
  async () => {
    const response = await axios.get("http://localhost:3000/api/admin/kyc-links/fetch"); // Ensure the API URL is correct
    return response.data.data; // Return the KYC links from the response
  }
);

// Async thunk to add a KYC link
export const addKycLink = createAsyncThunk(
  "kycLinks/addKycLink",
  async (newKycLink) => {
    const response = await axios.post("http://localhost:3000/api/admin/kyc-links/add", newKycLink); // Ensure the API URL is correct
    return response.data.data; // Return the newly added KYC link
  }
);

// Async thunk to delete a KYC link by ID
export const deleteKycLink = createAsyncThunk(
  "kycLinks/deleteKycLink",
  async (id) => {
    await axios.delete(`http://localhost:3000/api/admin/kyc-links/delete/${id}`); // Ensure the API URL is correct
    return id; // Return the ID of the deleted KYC link
  }
);

// Async thunk to edit a KYC link
export const editKycLink = createAsyncThunk(
  "kycLinks/editKycLink",
  async (updatedKycLink) => {
    const response = await axios.put(
      `http://localhost:3000/api/admin/kyc-links/edit/${updatedKycLink.id}`,
      updatedKycLink
    );
    return response.data.data; // Return the updated KYC link
  }
);

// Create the slice for KycLink
const kycLinkSlice = createSlice({
    name: "kycLinks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Handle fetching KYC links
      builder
        .addCase(fetchKycLinks.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchKycLinks.fulfilled, (state, action) => {
          state.loading = false;
          state.kycLinks = action.payload; // Update kycLinks with fetched data
        })
        .addCase(fetchKycLinks.rejected, (state) => {
          state.loading = false;
          state.kycLinks = []; // Clear kycLinks on failure
        })
        // Handle adding a KYC link
        .addCase(addKycLink.fulfilled, (state, action) => {
          state.kycLinks.push(action.payload); // Add the new KYC link to the state
        })
        // Handle editing a KYC link
    
        // Handle deleting a KYC link
        .addCase(deleteKycLink.fulfilled, (state, action) => {
          // Filter out the deleted KYC link by ID
          state.kycLinks = state.kycLinks.filter(
            (kycLink) => kycLink._id !== action.payload
          );
        });
    },})

// Export the reducer
export default kycLinkSlice.reducer;
