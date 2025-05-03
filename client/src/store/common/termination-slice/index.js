import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  terminateList: [],
  error: null, // to track any error
};

// ✅ Add new termination using raw form data
export const addTerminate = createAsyncThunk(
  "terminate/addTerminate",
  async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/terminate/add`,
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "Failed to add termination");
    }
  }
);

// ✅ Get all terminations by employeeId
export const getTerminationsByEmployeeId = createAsyncThunk(
  "terminate/getTerminationsByEmployeeId",
  async (employeeId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/admin/terminate/employee/${employeeId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "Failed to fetch terminations");
    }
  }
);

// ✅ Edit termination using raw form data
export const editTerminate = createAsyncThunk(
  "terminate/editTerminate",
  async ({ id, formData }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/admin/terminate/edit/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "Failed to edit termination");
    }
  }
);

// ✅ Delete termination



export const deleteTerminate = createAsyncThunk(
  "warning/deleteWarning",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/admin/terminate/delete/${id}`
    );
    return response.data;
  }
);

const terminateSlice = createSlice({
  name: "terminate",
  initialState,
  reducers: {
    resetTerminations: (state) => {
      state.terminateList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch terminations by employeeId
      .addCase(getTerminationsByEmployeeId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTerminationsByEmployeeId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.terminateList = action.payload.data;
      })
      .addCase(getTerminationsByEmployeeId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch terminations";
      })

      // Add termination
      .addCase(addTerminate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTerminate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.terminateList.push(action.payload.data);
      })
      .addCase(addTerminate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to add termination";
      })

      // Edit termination
      ;
  },
});

export const { resetTerminations } = terminateSlice.actions;
export default terminateSlice.reducer;
