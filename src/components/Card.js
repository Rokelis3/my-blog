const Card = (prop) => {
    const card = (
        <div className="container">
            <div className="photo">
                <img src={require('../images/'+prop.item.imageUrl)} alt="country"/>
            </div>
            <div className="information">
                <div className="location">
                    <img src={require("../images/pin.png")} alt="pin"/>
                    <h3>{prop.item.location}</h3>
                    <a href={prop.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="mainInfo">
                    <h1>{prop.item.title}</h1>
                    <h4>{prop.item.endDate}</h4>
                    <p>{prop.item.description}</p>
                </div>
            </div>

        </div>
    )
    return(
        <>
            {card}
        </>

    )
}

export default Card;