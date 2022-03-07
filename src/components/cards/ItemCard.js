import React from "react";

const ItemCard = ({image}) => (
    <div className="card text-center shadow" key={image.id}>
        <div className="overflow">
            <img src={image.imgsrc} alt="" className="card-img-top"/> 
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{image.title}</h4>
            <h6 className="card-title">{image.subTitle} </h6>
            
            <p className="card-text text-secondary">Price: {image.price}shkl</p>
            <a href="#" className="btn btn-outline-success">See also</a>
        </div>
    </div>
);



export default ItemCard;