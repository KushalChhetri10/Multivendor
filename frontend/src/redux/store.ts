import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";
import sellerSlice from "./reducers/seller";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    seller: sellerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
