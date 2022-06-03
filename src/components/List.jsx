import ListItem from "./ListItem"

function List ({items, handleClick}) {
    return (
        <div className="list-box">
        <p id='list'><i>Latest News</i></p>
        {items.articles.map((item, index) => <ListItem item={item} key={index} handleClick = {handleClick} />)}
        </div>
    )
}
export default List