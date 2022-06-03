import {Link} from 'react-router-dom'
import SearchPart from './SearchPart'

function Navbar ({setSearchCat}) {
    return (
        <div className='navbar'>
        <Link className= "link" to ="/about"> About </Link>
        <Link className= "link" to ="/"> Headlines </Link>
        <Link className= "link" to ="/readmore"> Read More </Link>
        <SearchPart setSearchCat={setSearchCat}/>
        </div>

    )
}
export default Navbar