import { Link, useNavigate } from "react-router-dom";

function HeadlineItem({item, handleClick }) {

  if (item.urlToImage=== null) {
    return (
      <div className="headline-item" onClick={handleClick(item)}>
        <div className= "headline-top">
      <h2> {item.title.replace(/\-(?:.(?!\-))+$/, "")}</h2>
      <p> {item.source.name}</p>
      </div>
      <div className="headline-bottom">
      <img src="https://thumbs.dreamstime.com/b/pat-dog-head-hand-girl-s-kindly-feeling-60942030.jpg" width="300" height="200" />
      <Link className="read-more" to="/readmore">
        Read more...
      </Link>
      </div>
    </div>
    )
  } else {

  return (
    <div className="headline-item" onClick={handleClick(item)}>
         <div className= "headline-top">
      <h2> {item.title.replace(/\-(?:.(?!\-))+$/, "")}</h2>
      <p> {item.source.name}</p>
      </div>
      <div className="headline-bottom">
      <img src={item.urlToImage} width="300" height="200" />
      <Link className="read-more" to="/readmore">
        Read more...
      </Link>
    </div>
    </div>
  );
}
}

export default HeadlineItem;
