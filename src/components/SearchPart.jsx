import Search from "./SearchFunction"


function SearchPart ({setSearchCat, setDisplay}) {
    return (
        <div className="search-part">
        <h5><i>Select News Category:</i></h5>
        <Search setSearchCat={setSearchCat} setDisplay={setDisplay}/>
        </div>
    )
}
export default SearchPart