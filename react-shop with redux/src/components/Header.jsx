import { Link } from "react-router-dom"

function Header() {
    
    return(
        <header>
            <h1><Link to='/'>MY SHOP</Link></h1>
            <nav>
                <ul>
                    <li><Link to='/'>PRODUCTS</Link></li>
                    <li><Link to='/admin'>ADMIN</Link></li>
                    <li><Link to='/bag'>BAG</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header