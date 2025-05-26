import { Link } from "react-router";

export default function HomePage() {
    return <>
        <div>HomePage</div>
        <p>Go to <Link to="/products">products</Link></p>
    </>
}