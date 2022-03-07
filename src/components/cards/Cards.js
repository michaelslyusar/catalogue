import React, { useEffect, useState } from 'react';
import Card from './ItemCard';
import '../../styles/components/_cards.scss';



const Cards = ({ images }) => {
    const [loadedImage, setLoadedImage] = useState(0);
    const [rows, setRows] = useState(0);

    useEffect(() => {
        console.log(images.length);
        setRows(Math.ceil(images.length / 3))
    }, [images])

    const image = images[0];
    

    return (
        <div className="cards">
            {images.map(image =>(
                <Card image={image} />
            ))}
        </div>
    )
}


export default Cards;