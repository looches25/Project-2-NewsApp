import Search from "./SearchFunction"


function SearchPart ({setSearchCat}) {
    return (
        <div className="search-part">
        <h5><i>Select News Category:</i></h5>
        <Search setSearchCat={setSearchCat}/>
        </div>
    )
}
export default SearchPart