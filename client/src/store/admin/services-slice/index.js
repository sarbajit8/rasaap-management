import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set up initial state
const initialState = {
  services: [],
  service: null,
  isLoading: false,
  error: null,
};

// Define async actions (thunks)

// Add service
export const addService = createAsyncThunk(
  'service/addService',
  async (serviceData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/admin/services/add', serviceData);
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Fetch all services
export const fetchAllServices = createAsyncThunk(
  'service/fetchAllServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3000/api/admin/services/fetch');
      return response.data; // Return all services on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);


// Edit service
export const editService = createAsyncThunk(
  'service/editService',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/admin/services/edit/${id}`, updatedData);
      return response.data; // Return response data on success
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message if API request fails
    }
  }
);

// Delete service
export const deleteService = createAsyncThunk(
  'service/deleteService',
  async (id) => {
 
      const response = await axios.delete(`http://localhost:3000/api/admin/services/delete/${id}`);
      return response.data; // Return response data on success
   
  }
);

// Create the slice
const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle addService
    builder
      .addCase(addService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services.push(action.payload.data); // Add the new service to the store
      })
      .addCase(addService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Capture the error message
      })
      .addCase(fetchAllServices.pending, (state) => {
        state.isLoading = true;
  ;
      })
      .addCase(fetchAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload.data; // Update the store with the fetched services
      })
      .addCase(fetchAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.services = []; 
      });
  
  },
});

// Export the reducer for configuration
export default serviceSlice.reducer;
