import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let ordersFetch = createAsyncThunk('content/ordersFetch', async () => {
    let res = await fetch('http://localhost:5000/orders')
    let data = await res.json()
    return data
})


let ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        loading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(ordersFetch.pending, (state, action) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(ordersFetch.fulfilled, (state, action) => {
            state.orders = action.payload
            state.loading = null
        })

        builder.addCase(ordersFetch.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

export const {} = ordersSlice.actions
export default ordersSlice.reducer