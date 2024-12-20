import { Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import AdminPage from "./Pages/AdminPage"
import BagPage from "./Pages/BagPage"
import EditAdmin from "./Pages/EditAdmin"

function MainComponent() {
    
    return(
        <main>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/bag" element={<BagPage/>}/>
                <Route path="/edit-admin" element={<EditAdmin/>}/>
            </Routes>
        </main>
    )
}

export default MainComponent