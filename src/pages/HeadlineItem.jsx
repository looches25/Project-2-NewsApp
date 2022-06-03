import { Link } from "react-router-dom";

function HeadlineItem({ item, handleClick }) {

  if (item.urlToImage=== null) {
    return (
      <div className="headline-item" onClick={handleClick(item)}>
      <h2> {item.title.replace(/\-(?:.(?!\-))+$/, "")}</h2>
      <p> {item.source.name}</p>
      <img src="https://thumbs.dreamstime.com/b/pat-dog-head-hand-girl-s-kindly-feeling-60942030.jpg" width="300" height="200" />
      <Link className="read-more" to="/readmore">
        Read more...
      </Link>
    </div>
    )
    // item.urlToImage = "www.somepic.com"
  } else {

  return (
    <div className="headline-item" onClick={handleClick(item)}>
      <h2> {item.title.replace(/\-(?:.(?!\-))+$/, "")}</h2>
      <p> {item.source.name}</p>
      <img src={item.urlToImage} width="300" height="200" />
      <Link className="read-more" to="/readmore">
        Read more...
      </Link>
    </div>
  );
}
}

export default HeadlineItem;
