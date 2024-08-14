// components/ImageComponent.js
import React from 'react';
import Images from '../../assets/ImagesComponent'; // Adjust the path based on your folder structure

const ImageComponent = () => {
    return (
        <div>
            {/* <img src="https://rb.gy/guvd3h" className="img-fluid" style={{ minHeight: "100%" }} alt="External Login"/> */}
            <img src={Images.Image} className="img-fluid" style={{ minHeight: "100%" }} alt="Local Login"/>
        </div>
    );
}

export default ImageComponent;
