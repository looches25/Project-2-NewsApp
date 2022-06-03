import List from "../components/List";
import Display from "../components/Display";

function ReadMore({ display, items, handleClick, setSearchCat }) {
  return (
    <div className="readpage">
      <List items={items} handleClick = {handleClick} setSearchCat={setSearchCat}/>
      <Display display={display} items={items}/>
    </div>
  );
}
export default ReadMore;
