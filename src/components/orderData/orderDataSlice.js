import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  orderData: [],
  error: '',
};

export const fetchData = createAsyncThunk('fetchOrderData', () => {
  return fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
});

export const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      console.log(state, action.payload);
      let id = action.payload['id'];
      let newStatus = action.payload['status'];
      state.orderData[id].status = newStatus;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.orderData = action.payload;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.orderData = [];
      state.error = action.error.message;
    });
  },
});

export const { updateStatus } = orderDataSlice.actions;

export default orderDataSlice.reducer;
