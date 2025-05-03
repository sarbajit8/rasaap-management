import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  employeeResignationList: [],
  employeeResignationByIdList: [],
};

// ✅ Add new resignation using raw form data
export const addEmployeeResignation = createAsyncThunk(
  "employeeResignation/addEmployeeResignation",
  async (formData) => {
    
    const result = await axios.post(
        
      `http://localhost:3000/api/resignation/add`,
      formData,
      console.log(formData,"form data ggg"),

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

// ✅ Get all resignations for one employee by employeeId
export const getAllResignationsByEmployee = createAsyncThunk(
  "employeeResignation/getAllResignationsByEmployee",
  async (employeeId) => {
    const result = await axios.get(
      `http://localhost:3000/api/resignation/list/${employeeId}`
    );
    return result?.data;
  }
);

// ✅ Get all resignations (admin or global view)
export const fetchAllEmployeeResignations = createAsyncThunk(
  "employeeResignation/fetchAllEmployeeResignations",
  async () => {
    const result = await axios.get(
      `http://localhost:3000/api/resignation/get`
    );
    return result?.data;
  }
);

// ✅ Edit resignation using raw form data
export const editEmployeeResignation = createAsyncThunk(
  "employeeResignation/editEmployeeResignation",
  async ({ id, formData }) => {
    const result = await axios.put(
      `http://localhost:3000/api/resignation/edit/${id}`,
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

// ✅ Update resignation reply by ID
export const updateResignationReplyById = createAsyncThunk(
  "employeeResignation/updateResignationReplyById",
  async ({ id, reply }) => {
    const response = await axios.put(
      `http://localhost:3000/api/resignation/update-reply/${id}`,
      { reply }
    );
    return response.data;
  }
);

// ✅ Delete resignation application
export const deleteResignation = createAsyncThunk(
  "employeeResignation/deleteResignation",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/resignation/delete/${id}`
    );
    return { id, ...response.data };
  }
);

const employeeResignationSlice = createSlice({
  name: "employeeResignation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployeeResignations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllEmployeeResignations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeResignationList = action.payload.data;
      })
      .addCase(fetchAllEmployeeResignations.rejected, (state) => {
        state.isLoading = false;
        state.employeeResignationList = [];
      })
      .addCase(getAllResignationsByEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllResignationsByEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeResignationByIdList = action.payload.data;
      })
      .addCase(getAllResignationsByEmployee.rejected, (state) => {
        state.isLoading = false;
        state.employeeResignationByIdList = [];
      })
      .addCase(updateResignationReplyById.fulfilled, (state, action) => {
        const updatedId = action.payload?.data?._id;
        state.employeeResignationList = state.employeeResignationList.map(
          (item) =>
            item._id === updatedId
              ? { ...item, reply: action.payload?.data?.reply }
              : item
        );
      })
      .addCase(deleteResignation.fulfilled, (state, action) => {
        state.employeeResignationByIdList = state.employeeResignationByIdList.filter(
          (resignation) => resignation._id !== action.payload.id
        );
        state.employeeResignationList = state.employeeResignationList.filter(
          (resignation) => resignation._id !== action.payload.id
        );
      });
  },
});

export default employeeResignationSlice.reducer;
