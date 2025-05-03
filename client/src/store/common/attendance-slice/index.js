import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  records: [],          // List of attendance records
  isLoading: false,
  error: null,
  allRecords: [],
};

// ✅ MARK attendance (log in/out/lunch in/out)
export const markAttendance = createAsyncThunk(
  "attendance/mark",
  async ({ userId, userName, type, time  }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/attendance/mark",
        { userId, userName, type, time  },
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ✅ GET attendance records for a user
export const fetchAttendance = createAsyncThunk(
  "attendance/fetch",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/attendance/user/${userId}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const fetchAllAttendance = createAsyncThunk(
    "attendance/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/attendance/all",
          { withCredentials: true }
        );
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
      }
    }
  );
  
const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    clearAttendance(state) {
      state.records = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch attendance
      .addCase(fetchAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = action.payload.data || [];
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load attendance";
      })

      // Mark attendance
      .addCase(markAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.isLoading = false;

        const updated = action.payload.data;
        const index = state.records.findIndex(
          (rec) => rec.date === updated.date
        );

        if (index !== -1) {
          state.records[index] = updated;
        } else {
          state.records.unshift(updated);
        }
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to mark attendance";
      })
      .addCase(fetchAllAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllAttendance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allRecords = action.payload.data || [];
      })
      .addCase(fetchAllAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch all attendance";
      });
  },
});

export const { clearAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
