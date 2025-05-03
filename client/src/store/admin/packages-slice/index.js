import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set up initial state
const initialState = {
  packages: [],
  package: null,
  isLoading: false,
  error: null,
};

// Define async actions (thunks)

// Add a new package
export const addPackage = createAsyncThunk(
  'package/addPackage',
  async (packageData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin/packages/add', packageData);
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Fetch all packages
export const fetchAllPackages = createAsyncThunk(
  'package/fetchAllPackages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/admin/packages/fetch');
      return response.data; // Return all packages on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Edit a package
export const editPackage = createAsyncThunk(
  'package/editPackage',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/admin/packages/edit/${id}`, updatedData);
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Delete package
export const deletePackage = createAsyncThunk(
    'package/deletePackage',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`http://localhost:3000/api/admin/packages/delete/${id}`);
        return response.data; // Return response data on success
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error message if API request fails
      }
    }
  );

// Create the slice
const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle addPackage
    builder
      .addCase(addPackage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.packages.push(action.payload.data); // Add the new package to the store
      })
      .addCase(addPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      });

    // Handle fetchAllPackages
    builder
      .addCase(fetchAllPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.packages = action.payload.data; // Update the store with the fetched packages
      })
      .addCase(fetchAllPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.packages = []; // Update the store with the fetched packages
      });


   
  },
});

export default packageSlice.reducer;
