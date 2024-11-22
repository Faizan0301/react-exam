import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
    books: [],
    error: null,
    loading: false
}

export const fetchBook = createAsyncThunk('books/fetchBook', async (_, { rejectWithValue }) => {
    try {
        const res = await apiInstance.get('/books.json');
        return Object.keys(res.data).map((key) => ({ id: key, ...res.data[key] }))
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchBook.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.books = action.payload;
            })
            .addCase(fetchBook.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default bookSlice.reducer;