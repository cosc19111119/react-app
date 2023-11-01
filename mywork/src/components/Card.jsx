function Card(props){
    return(
        <div className="card">
        <img src={`${props.images}`} alt=" Image" />
        <div className="card-text">
          <h2 className="">{`${props.title}`}</h2>
          <p className={`${props.style}`}>{`${props.title}`}</p>
        </div>
        <button className={`${props.variant}`}>Click me</button>
      </div>

    )
}
export default Card;