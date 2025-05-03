import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  employeeLeaveList: [],
  employeeLeaveByIdList: [],
};

export const addEmployeeLeave = createAsyncThunk(
  "employeeLeave/addEmployeeLeave",
  async (formData) => {
    const result = await axios.post(
      `http://localhost:3000/api/leave-application/add`,
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

export const fetchAllEmployeeLeaves = createAsyncThunk(
  "employeeLeave/fetchAllEmployeeLeaves",
  async () => {
    const result = await axios.get(
      `http://localhost:3000/api/leave-application/get`
    );
    return result?.data;
  }
);

export const getAllLeaveByEmployee = createAsyncThunk(
  "employeeLeave/getAllLeaveByEmployee",
  async (employeeId) => {
    const result = await axios.get(
      `http://localhost:3000/api/leave-application/list/${employeeId}`
    );
    return result?.data;
  }
);

export const updateEmployeeLeaveStatus = createAsyncThunk(
  "employeeLeave/updateEmployeeLeaveStatus",
  async ({ id, leaveStatus }) => {
    const response = await axios.put(
      `http://localhost:3000/api/leave-application/update-status/${id}`,
      { leaveStatus }
    );
    return response.data;
  }
);

export const updateLeaveReplyById = createAsyncThunk(
  "employeeLeave/updateLeaveReplyById",
  async ({ id, reply }) => {
    const response = await axios.put(
      `http://localhost:3000/api/leave-application/update-reply/${id}`,
      { reply }
    );
    return response.data;
  }
);

export const editLeave = createAsyncThunk(
  "employeeLeave/editLeave",
  async ({ id, formData }) => {
    const result = await axios.put(
      `http://localhost:3000/api/leave-application/edit/${id}`,
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

export const deleteLeave = createAsyncThunk(
  "employeeLeave/deleteLeave",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/leave-application/delete/${id}`
    );
    return { id, ...response.data };
  }
);

const employeeLeaveSlice = createSlice({
  name: "employeeLeave",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployeeLeaves.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllEmployeeLeaves.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeLeaveList = action.payload.data;
      })
      .addCase(fetchAllEmployeeLeaves.rejected, (state) => {
        state.isLoading = false;
        state.employeeLeaveList = [];
      })
      .addCase(getAllLeaveByEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLeaveByEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeLeaveByIdList = action.payload.data;
      })
      .addCase(getAllLeaveByEmployee.rejected, (state) => {
        state.isLoading = false;
        state.employeeLeaveByIdList = [];
      })
      .addCase(updateLeaveReplyById.fulfilled, (state, action) => {
        const updatedId = action.payload?.data?._id;
        state.employeeLeaveList = state.employeeLeaveList.map((item) =>
          item._id === updatedId ? { ...item, reply: action.payload?.data?.reply } : item
        );
      })
      .addCase(deleteLeave.fulfilled, (state, action) => {
        state.employeeLeaveByIdList = state.employeeLeaveByIdList.filter(
          (leave) => leave._id !== action.payload.id
        );
        state.employeeLeaveList = state.employeeLeaveList.filter(
          (leave) => leave._id !== action.payload.id
        );
      });
  },
});

export default employeeLeaveSlice.reducer;
