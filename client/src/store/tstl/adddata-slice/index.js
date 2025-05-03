import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set up initial state
const initialState = {
  companyDetails: [],
  companyByEmployeeId: null,
  isLoading: false,
  error: null,
};

// Define async actions (thunks)

// Add company details (and employee details)
export const addCompanyDetails = createAsyncThunk(
    'company/addCompanyDetails',
    async ({ employeeId, employeeName, companies }, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:3000/api/teleleader/adddata/company', {employeeId, employeeName, companies});
        return response.data; // Return response data on success
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error message if API request fails
      }
    }
  );
  
// Fetch all company details
export const fetchAllCompanyDetails = createAsyncThunk(
  'company/fetchAllCompanyDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/teleleader/adddata/companies');
      return response.data; // Return company data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);
// Edit company details
export const editCompanyDetails = createAsyncThunk(
    'company/editCompanyDetails',
    async ({ employeeId, companyId, updatedData }, { rejectWithValue }) => {
      try {
        const response = await axios.put('http://localhost:3000/api/teleleader/adddata/edit', { employeeId, companyId, updatedData });
        return response.data; // Return updated data on success
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error message if API request fails
      }
    }
  );
  
  // Delete company details
  export const deleteCompanyDetails = createAsyncThunk(
    'company/deleteCompanyDetails',
    async ({ employeeId, companyId }, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`http://localhost:3000/api/teleleader/adddata/delete/${employeeId}/${companyId}`);
        return response.data; // Return success message on successful deletion
      } catch (error) {
        return rejectWithValue(error.response.data); // Return error message if API request fails
      }
    }
  );
// Fetch company details by employeeId
export const fetchCompanyDetailsByEmployeeId = createAsyncThunk(
  'company/fetchCompanyDetailsByEmployeeId',
  async (employeeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/teleleader/adddata/company/${employeeId}`);
      return response.data; // Return company data for the specific employee on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Create the slice
const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle addCompanyDetails
    builder
      .addCase(addCompanyDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCompanyDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyDetails.push(action.payload.data); // Add the new company to the store
      })
      .addCase(addCompanyDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.companyDetails = []; // Capture the error message
      });

    // Handle fetchAllCompanyDetails
    builder
      .addCase(fetchAllCompanyDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCompanyDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyDetails = action.payload.data; // Update the store with the fetched company data
      })
      .addCase(fetchAllCompanyDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      });

    // Handle fetchCompanyDetailsByEmployeeId
    builder
      .addCase(fetchCompanyDetailsByEmployeeId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCompanyDetailsByEmployeeId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyByEmployeeId = action.payload.data; // Update the store with the fetched company data for the specific employee
      })
      .addCase(fetchCompanyDetailsByEmployeeId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      })
      
  },
});

// Export actions and reducer
export default companySlice.reducer;
