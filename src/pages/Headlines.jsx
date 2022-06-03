import HeadlineItem from "./HeadlineItem";
import HeadlineMesssage from "./HeadlineMessage";

function Headlines({items, handleClick} ) {

    return (
      <div className="headlines-wrapper">
          
        <HeadlineMesssage/>

        <div className="headlines-box">
        {items.articles.map((item, index) => <HeadlineItem key={index} item={item} handleClick={handleClick}/>)}
      </div>

      </div>
    );
  }

export default Headlines;
