import { Outlet } from "react-router-dom"

function News() {
    return (
        <>
            <h1>News</h1>
            <Outlet/>
        </>
    )
}

export default News