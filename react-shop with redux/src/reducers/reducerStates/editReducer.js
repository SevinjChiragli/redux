export let initialObjectEdit = {
    edit_products:[]
}

export function editReducer(state, action) {
    if(action.type === 'DELETE PRODUCT'){
        let newArr = [...state.edit_products]
        let productIndex = newArr.findIndex((item) => item.id === action.payload)
        newArr.splice(productIndex, 1)
        return { ...state,  edit_products: newArr }
    }else if(action.type === 'GET PRODUCTS'){
        return {...state, edit_products: action.payload}
    }else if(action.type === 'ADD FORM'){
        let newArr = [...state.edit_products]
        newArr.push(action.payload)
        return {...state, edit_products: newArr}
    }else if (action.type === 'EDIT PRODUCT') {
        let newArr = [...state.edit_products]
        let productIndex = newArr.findIndex((item) => item.id === action.payload.id)
        newArr[productIndex] = {...newArr[productIndex], ...action.payload.formData}

        return { ...state, edit_products: newArr }
    }
    
    
    return state
}

// export let initialObjectEdit = {
//     edit_products: []
// }

// let reducerObject = {
//     'DELETE PRODUCT': function (state, action) {
//         let newArr = [...state.edit_products]
//         let productIndex = newArr.findIndex((item) => item.id === action.payload)
//         newArr.splice(productIndex, 1)
//         return { ...state, edit_products: newArr }
//     },
//     'GET PRODUCTS': function (state, action) {
//         return { ...state, edit_products: action.payload }
//     },
//     'ADD FORM': function (state, action) {
//         let newArr = [...state.edit_products]
//         newArr.push(action.payload)
//         return { ...state, edit_products: newArr }
//     },
//     'EDIT PRODUCT': function (state, action) {
//         let newArr = [...state.edit_products]
//         let productIndex = newArr.findIndex((item) => item.id === action.payload.id)
//         newArr[productIndex] = { ...newArr[productIndex], ...action.payload.formData }
//         return { ...state, edit_products: newArr }
//     },
// }

// export function editReducer(state, action) {
//     let handle = reducerObject[action.type]
//     if(action){
//         return handle(state, action)
//     }

//     return state
// }
