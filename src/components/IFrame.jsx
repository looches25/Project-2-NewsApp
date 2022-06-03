function IFrame ({ display, items }) {

    if (display.title === "") {
        return ( 
            <iframe src={items.articles[0].url}> </iframe>
        );
    } else {
      return ( 
        <iframe src={display.url}> </iframe>
      )
    }
}

export default IFrame