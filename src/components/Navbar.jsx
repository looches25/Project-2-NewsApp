import {Link} from 'react-router-dom'
import SearchPart from './SearchPart'

function Navbar ({setSearchCat, setDisplay}) {
    return (
        <div className='navbar'>
        <Link className= "link" to ="/about"> About </Link>
        <Link className= "link" to ="/"> Headlines </Link>
        <Link className= "link" to ="/readmore"> Read More </Link>
        <SearchPart setSearchCat={setSearchCat} setDisplay={setDisplay}/>
        </div>

    )
}
export default Navbar