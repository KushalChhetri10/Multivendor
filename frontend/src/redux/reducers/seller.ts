import { createSlice } from "@reduxjs/toolkit";
import {
  activateSellerAsync,
  createSellerAsync,
  loginSellerAsync,
} from "../actions/seller";

interface Seller {
  _id: string;
  name: string;
  email: string;
  address: string;
  phonenumber: string;
  zipcode: string;
}
interface SellerState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  isAuthenticated: boolean;
  error: string | null;
  seller: Seller | null;
  token: string;
}

const initialState: SellerState = {
  loading: "idle",
  isAuthenticated: false,
  error: null,
  seller: null,
  token: "",
};

const sellerSlice = createSlice({
  name: "seller",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSellerAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginSellerAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
        state.seller = action.payload.user;
      })
      .addCase(loginSellerAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
        throw action.error;
      })
      .addCase(createSellerAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createSellerAsync.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(createSellerAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
        throw action.error;
      })
      .addCase(activateSellerAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(activateSellerAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isAuthenticated = true;
        state.seller = action.payload.user;
      })
      .addCase(activateSellerAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "An error occurred";
        throw action.error;
      });
  },
});

export default sellerSlice;
