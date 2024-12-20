import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let productsFetch = createAsyncThunk('content/productsFetch', async () => {
    let res = await fetch('http://localhost:5000/goods')
    let data = await res.json()
    return data
})


let productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {
        productsSorting: (state, action) => {
            let newArr = [...state.products]
            if (action.payload === 'UP') {
                newArr.sort((a, b) => a.product_price - b.product_price)
            } else {
                newArr.sort((a, b) => b.product_price - a.product_price)
            }
            return { ...state, products: newArr }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state, action) => {
            state.loading = true
            state.error = null
        })

        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = null
        })

        builder.addCase(productsFetch.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

export const {productsSorting} = productsSlice.actions
export default productsSlice.reducer