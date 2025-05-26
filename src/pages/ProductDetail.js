import { useParams } from "react-router";

function ProductDetail (){
    let params = useParams();

    return <>
        <h1>Product detail</h1>
       {params.productId}
    </>
}

export default ProductDetail;