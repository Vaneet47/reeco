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
    updateData: (state, action) => {
      let id = action.payload['id'];
      let nStatus = action.payload['status'];
      let nPrice = action.payload['price'] || state.orderData[id].price;
      let nQuantity = action.payload['quantity'] || state.orderData[id].quantity;
      let nTotal = action.payload['total'] || state.orderData[id].total;
      state.orderData[id].status = nStatus;
      state.orderData[id].price = nPrice;
      state.orderData[id].quantity = nQuantity;
      state.orderData[id].total = nTotal;
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

export const { updateData } = orderDataSlice.actions;

export default orderDataSlice.reducer;
