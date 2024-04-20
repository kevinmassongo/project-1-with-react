import { useParams } from "react-router-dom";

function NewsListItem ({news}) {
    //etat
    const useparam = useParams()
    const {id} = useparam

    //comportement
    const post = news.find((post) => post.id == id )

    if(!post){
        <p>L'article que vous avez demandé n'existe pas</p>
    }

    //affichage
    return (
        <>
            <h2>{post.title}</h2>
            <img src={post.urlToImage} height={500} alt="post image" />
            <h4>
                {post.description}
            </h4>
            <p>
                {post.content}
            </p>
            <p>
                Lire la suite <a href={post.url} target="_blank" rel="noreferrer">ici</a>
            </p>
        </>
    )
}

export default NewsListItem;