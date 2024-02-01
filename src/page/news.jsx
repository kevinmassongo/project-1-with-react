import { Outlet } from "react-router-dom"

function News() {
    return (
        <>
            <div className="news">
                <h1>News</h1>
                <Outlet />
            </div>
        </>
    )
}

export default News