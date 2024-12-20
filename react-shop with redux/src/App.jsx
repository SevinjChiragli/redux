import { createContext, useReducer } from 'react'
import './App.css'
import { initialObjectOrders, ordersReducer } from './reducers/reducerStates/ordersReducer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import { editReducer, initialObjectEdit } from './reducers/reducerStates/editReducer'

export const MyContext = createContext()

function App() {
  let [stateOrders, dispatchOrders] = useReducer(ordersReducer, initialObjectOrders)
  let [stateEdit, dispatchEdit] = useReducer(editReducer, initialObjectEdit)

  return (
    <MyContext.Provider value={{
      stateOrders,
      dispatchOrders,
      stateEdit, 
      dispatchEdit
    }}>
      <Header />
      <MainComponent />
    </MyContext.Provider>
  )
}

export default App
