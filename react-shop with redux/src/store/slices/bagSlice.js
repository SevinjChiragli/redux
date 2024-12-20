import { createSlice } from "@reduxjs/toolkit";

let bagSlice = createSlice({
    name: 'bag',
    initialState: {
        bag: JSON.parse(localStorage.getItem('bag')),
    },
    reducers: {
        addToBag: (state, action) => {
            let bag = JSON.parse(localStorage.getItem('bag'))
            let addedProduct = { ...action.payload }
            addedProduct.count = 1
            addedProduct.totalPrice = addedProduct.count * addedProduct.product_price
            bag.push(addedProduct)
            localStorage.setItem('bag', JSON.stringify(bag))
            return { ...state, bag: bag }
        },
        deleteFromBag: (state, action) => {
            let bag = JSON.parse(localStorage.getItem('bag'))
            let productIndex = bag.findIndex((item) => item.id === action.payload)
            bag.splice(productIndex, 1)
            localStorage.setItem('bag', JSON.stringify(bag))
            return { ...state, bag: bag }
        },
        minusProduct: (state, action) => {
            let bag = JSON.parse(localStorage.getItem('bag'))
            let productIndex = bag.findIndex((item) => item.id === action.payload)
            bag[productIndex].count -= 1

            if (bag[productIndex].count < 1) {
                bag.splice(productIndex, 1)
            } else {
                bag[productIndex].totalPrice = bag[productIndex].count * bag[productIndex].product_price
            }

            localStorage.setItem('bag', JSON.stringify(bag))
            return { ...state, bag: bag }
        },
        plusProduct: (state, action) => {
            let bag = JSON.parse(localStorage.getItem('bag'))
            let productIndex = bag.findIndex((item) => item.id === action.payload)
            bag[productIndex].count += 1
            bag[productIndex].totalPrice = bag[productIndex].count * bag[productIndex].product_price

            localStorage.setItem('bag', JSON.stringify(bag))
            return { ...state, bag: bag }
        },
        clearBag: (state, action) => {
            localStorage.setItem('bag', JSON.stringify([]))

            return { ...state, bag: [] }
        },
    },
})

export const { addToBag, deleteFromBag, clearBag, minusProduct, plusProduct } = bagSlice.actions
export default bagSlice.reducer