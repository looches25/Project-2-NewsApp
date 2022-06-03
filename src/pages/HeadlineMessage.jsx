
function HeadlineMesssage () {
    const current = new Date();
    const date =`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    const time =`${current.getHours()}:${current.getMinutes()+1}:${current.getSeconds()}`
    return (
        <div className="headline-message">
        <h1> Latest Headlines </h1>
        <p> Last Updated:{date} {time} </p>
        </div>
    )
}
export default HeadlineMesssage