import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set up initial state
const initialState = {
  assignPackages: [],
  assignPackage: null,
  assignPackagesdata: [],
  isLoading: false,
  error: null,
};

// Async actions (thunks) for fetching, adding, editing, and deleting assign packages

// Fetch all assign packages
export const fetchAllAssignPackages = createAsyncThunk(
  'assignPackage/fetchAllAssignPackages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/teleleader/assignpackage/fetch');
      return response.data; // Return all assign packages
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Fetch assign packages by companyId
export const fetchAssignPackagesByCompany = createAsyncThunk(
  'assignPackage/fetchAssignPackagesByCompany',
  async (companyId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/teleleader/assignpackage/company/${companyId}`);
      return response.data; // Return assign packages for a specific company
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Add new assign package
export const addAssignPackage = createAsyncThunk(
  'assignPackage/addAssignPackage',
  async (assignPackageData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/teleleader/assignpackage/add', assignPackageData);
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Edit an existing assign package
export const editAssignPackage = createAsyncThunk(
  'assignPackage/editAssignPackage',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/teleleader/assignpackage/edit/${id}`, updatedData);
      return response.data; // Return updated assign package on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Delete an assign package
export const deleteAssignPackage = createAsyncThunk(
  'assignPackage/deleteAssignPackage',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/teleleader/assignpackage/delete/${id}`);
      return response.data; // Return success message on delete
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Create the slice
const assignPackageSlice = createSlice({
  name: 'assignPackage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchAllAssignPackages
    builder
      .addCase(fetchAllAssignPackages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllAssignPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assignPackages = action.payload.data; // Update the store with the fetched assign packages
      })
      .addCase(fetchAllAssignPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.assignPackages = []; // Capture the error message
      });

    // Handle fetchAssignPackagesByCompany
    builder
      .addCase(fetchAssignPackagesByCompany.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAssignPackagesByCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assignPackagesdata = action.payload.data; // Update the store with the fetched assign packages for the company
      })
      .addCase(fetchAssignPackagesByCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.assignPackagesdata = []; // Capture the error message
      });

    // Handle addAssignPackage
    builder
      .addCase(addAssignPackage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addAssignPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assignPackages.push(action.payload.data); // Add the new assign package to the store
      })
      .addCase(addAssignPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      });

    // Handle editAssignPackage
    builder
      .addCase(editAssignPackage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editAssignPackage.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedPackageIndex = state.assignPackages.findIndex(
          (pkg) => pkg._id === action.payload.data._id
        );
        if (updatedPackageIndex >= 0) {
          state.assignPackages[updatedPackageIndex] = action.payload.data; // Update the modified assign package
        }
      })
      .addCase(editAssignPackage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      });

    // Handle deleteAssignPackage
    // builder
    //   .addCase(deleteAssignPackage.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteAssignPackage.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.assignPackages = state.assignPackages.filter(
    //       (pkg) => pkg._id !== action.payload.data._id // Remove the deleted assign package from the store
    //     );
    //   })
    //   .addCase(deleteAssignPackage.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload; // Capture the error message
    //   });
  },
});

export default assignPackageSlice.reducer;
