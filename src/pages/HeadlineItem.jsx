import { Link, useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import ScrollToTop from "../components/ScrolltoTop";

function HeadlineItem({item, handleClick }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (item.urlToImage=== null) {
    return (
      <>
      <ScrollToTop />
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
    </>


    )
  } else {

  return (
    <>
    <ScrollToTop />
    <div className="headline-item" onClick={handleClick(item)}>
         <div className= "headline-top">
      <h2 className="headline-title"> {item.title.replace(/\-(?:.(?!\-))+$/, "")}</h2>
      <p className="headline-title"> {item.source.name}</p>
      </div>
      <div className="headline-bottom">
      <img src={item.urlToImage} width="300" height="200" />
      <Link className="read-more" to="/readmore">
        Read more...
      </Link>
    </div>
    </div>
  </>
  )}}
export default HeadlineItem;
