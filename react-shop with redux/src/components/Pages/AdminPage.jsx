import { Link } from "react-router-dom"
import OrdersList from "../Orders/OrdersList"

function AdminPage() {

    return (
        <section>
            <h1>ADMIN</h1>
            <Link to='/edit-admin'>EDIT ADMIN</Link>
            <OrdersList/>
        </section>
    )
}

export default AdminPage