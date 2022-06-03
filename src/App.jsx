import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Headlines from "./pages/Headlines";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ReadMore from "./pages/ReadMore";

function App() {
  const [display, setDisplay] = useState({
    title:"",
    source: "",
    urlToImage:'',
    description:"",
    content:"",
  })
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchCat, setSearchCat] = useState("general")
  
  // const redirect = () => {
    //   const navigate = useNavigate()
    // }

    const handleClick = (item) => (event) => {
    setDisplay(item)
    console.log('booyah')
    // navigate("/readmore")
  }

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=SG&category=${searchCat}&apiKey=${import.meta.env.VITE_APIKEY}`)
      .then((response) => response.json())
      // .then(data => console.log(data));
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [searchCat]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

  return(
    <>
      <BrowserRouter>
    <Navbar setSearchCat={setSearchCat} setDisplay={setDisplay}/>
        <Routes>
        <Route path="/" element={<Headlines items={items} handleClick = {handleClick}/>}>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/readmore" element={<ReadMore display={display} handleClick = {handleClick} items={items} setSearchCat={setSearchCat}/>} />
          <Route path="*" element={<Headlines items={items} handleClick = {handleClick}/>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}
}


export default App;
