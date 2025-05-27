import { Link } from "react-router";

const productList = [
    { id: 'prod_1', title: 'Product 1' },
    { id: 'prod_2', title: 'Product 2' },
    { id: 'prod_3', title: 'Product 3' }
]

function Product() {
    return <>
        <h1>
            Product
        </h1>
        <ul>
            {productList.map(item => <li>
                <Link to={item.id}>{item.title}</Link>
            </li>
            )}
        </ul>
    </>
}


export default Product;