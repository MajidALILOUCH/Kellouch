import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFlights } from "../api/flightsApi";

// Async action to fetch flights
export const getFlights = createAsyncThunk(
  "flights/getFlights",
  async (criteria) => {
    return await fetchFlights(criteria);
  }
);

const flightsSlice = createSlice({
  name: "flights",
  initialState: { flights: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch flights";
      });
  },
});

export default flightsSlice.reducer;
