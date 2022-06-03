import {useState} from "react"

function Search ({setSearchCat, setDisplay}) {
    const categories =['General', 'Business', 'Technology', 'Science', 'Entertainment', "Health", "Sports"]

    const [isChecked, setIsChecked] = useState(
        [true, false, false, false, false, false, false]
    );
    const handleInputChange = (position) => {
        if (isChecked.filter(Boolean).length === 0) {
        const updatedIsChecked = isChecked.map((bool,index) => index === position ? !bool : bool)
        console.log('updated', updatedIsChecked)
        setIsChecked(updatedIsChecked)
        handleSearchCat(updatedIsChecked)
    } else {
        if (isChecked.filter(Boolean).length === 1 && isChecked[position]===false) {
            const updatedIsChecked = isChecked.map((bool,index) =>  isChecked[index] === true ? !bool: bool)
            updatedIsChecked[position] = true
            setDisplay({
                title:"",
                source: "",
                urlToImage:'',
                description:"",
                content:"",
              })
            
        setIsChecked(updatedIsChecked)
        handleSearchCat(updatedIsChecked)
            } else {alert("Something went wrong #1!")}
        }
    }
        
        // if (isChecked[position]===true) {
        //     isChecked[position] = false
        // const updatedIsChecked = isChecked
  

    const handleSearchCat=(updatedIsChecked) => {
        // console.log ("handleSearchCat-isChecked", isChecked) // still wrong
        const searchIndex= updatedIsChecked.indexOf(true)
        // console.log("test",categories[searchIndex])
        setSearchCat(categories[searchIndex])
    }

    return (
        
        categories.map( (category, index) =>
        <div className="checkbox"> 
        <input 
        key={index}
        type = 'checkbox'
        id= {category}
        value= {category}
        checked={isChecked[index]}
        onChange={()=>handleInputChange(index)} /> {category}
        </div>
        
    ))
}
export default Search