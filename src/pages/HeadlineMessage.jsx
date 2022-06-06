function HeadlineMesssage () {
    
    let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const current = new Date();
    const day = current.getDate()
    const month = months [current.getMonth()]
    const year = current.getFullYear()

    const date =`${current.getDate()} ${month} ${current.getFullYear()}`
    const time =`${current.getHours()}:${current.getMinutes()+1}:${current.getSeconds()}`
    return (
        <div className="headline-message">
        <h1> Latest Headlines </h1>
        <p> Last Updated: {date} at {time} </p>

        </div>
    )
}
export default HeadlineMesssage