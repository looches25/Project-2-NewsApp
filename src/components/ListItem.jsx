import {Link} from "react-router-dom";

function ListItem ({item, handleClick}) {
    return (
        <div className= "list-card">
        <h2> {(item.title).replace(/\-(?:.(?!\-))+$/, '')} </h2>
        <p><b><i> Source: {item.source.name}</i></b></p>
        <p> {item.description} </p>
        <Link className="read-more" to="/readmore" onClick={handleClick(item)}>
        Read more...
      </Link>
        </div>
    )
}
export default ListItem