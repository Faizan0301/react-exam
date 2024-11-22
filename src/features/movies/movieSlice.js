import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
    movies: [],
    error: null,
    loading: false
}

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (_, { rejectWithValue }) => {
    try {
        const res = await apiInstance.get('/');
        return Object.keys(res.data).map((key) => ({ id: key, ...res.data[key] }))
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
const movieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.books = action.payload;
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default movieSlice.reducer;