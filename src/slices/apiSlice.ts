import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { GetRequest } from "../services/api";

interface ApiState {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: ApiState = {
    data: null,
    loading: false,
    error: null,
};

export const fetchData = createAsyncThunk(
    "api/fetchData",
    async (
        { path, token }: { path: string; token?: string },
        thunkAPI
    ) => {
        try {
            const response = await GetRequest(path, token);
            if (response?.status === 200 && response?.data) {
                return response.data;
            } else {
                return thunkAPI.rejectWithValue(response?.message || "Unknown error");
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || "Unknown error");
        }
    }
);

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<any>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
        clearData: (state) => {
            state.data = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setData, clearData } = apiSlice.actions;
export default apiSlice.reducer;
