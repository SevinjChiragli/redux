import ProductsList from "../Products/ProductsList"
import ProductsSorting from "../Products/ProductsSorting"

function ProductsPage() {

    return (
        <section>
            <h1>PRODUCTS</h1>
            <ProductsSorting/>
            <ProductsList/>
        </section>
    )
}

export default ProductsPage