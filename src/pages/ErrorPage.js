import NavNavigation from "../components/MainNavigation";

function ErrorPage() {
    return <>
        <NavNavigation />
        <main>
            <h1>An error occurred</h1>
            <p>Could not find this page!</p>
        </main>
    </>
}

export default ErrorPage;