import { Link } from "react-router-dom";

function NewsList ({news}) {
    //etat

    //comportement

    //affichage

    return (
        <>
            <ul>
                {news.map((post)=>
                <div key={post.id}>
                    <li><Link to={`/news/${post.id}`}>{post.title}</Link></li>
                </div>
                )}
            </ul>
        </>
    )
}

export default NewsList;