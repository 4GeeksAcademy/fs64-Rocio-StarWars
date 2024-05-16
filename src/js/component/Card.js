
const Card = ({name}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <a href="#" className="btn btn-primary">More info</a>
            </div>
        </div>
    )
}

export default Card;