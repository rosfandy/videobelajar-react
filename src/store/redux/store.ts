import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

export const store = configureStore({
    reducer: rootReducer,
});

// Custom hooks (opsional)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
