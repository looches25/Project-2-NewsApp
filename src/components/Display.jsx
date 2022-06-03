import IFrame from "./IFrame";

function Display({ display, items }) {
  console.log("disp2", display);

  if (display.title === "") {
    return (
      <div className="display-box">
        <IFrame display={display} items={items} />
        {/* <h1>{items.articles[0].title.replace(/\-(?:.(?!\-))+$/, "")}</h1>
        <p>
          <b>
            <i> Source: {items.articles[0].source.name}</i>
          </b>
        </p>
        <img src={items.articles[0].urlToImage} width="600" height="auto" />
        <p>
          <i>{items.articles[0].description}</i>
        </p>
        <p>{items.articles[0].content}</p> */}
      </div>
    );
  } else {
    return (
      <div className="display-box">
        <IFrame display={display} items={items} />
        {/* <h1>{display.title.replace(/\-(?:.(?!\-))+$/, "")}</h1>
        <p>
          <b>
            <i> Source: {display.source.name}</i>
          </b>
        </p>
        <img src={display.urlToImage} width="600" height="auto" />
        <p>
          <i>{display.description}</i>
        </p>
        <p>{display.content}</p> */}
      </div>
    );
  }
}
export default Display;
