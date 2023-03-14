import React from 'react';
import Photo from './photo';

function Gallery() {
    return (
        <div>
            <h1>I am gallery component</h1>
            <h2>I will contain multiple instances of photo component.</h2>
            {/* photoname is a prop */}
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                <Photo photoname="Sunshine" likes="20"></Photo>
                <Photo photoname="Dusk" likes="22"></Photo>
                <Photo photoname="Rainy" likes="21"></Photo>
                <Photo photoname="Snow" likes="26"></Photo>
                <Photo photoname="Cloudy" likes="24"></Photo>
                <Photo photoname="Mist" likes="29"></Photo>
            </div>
        </div>
    );
}

export default Gallery;