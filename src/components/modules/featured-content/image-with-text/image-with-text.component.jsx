import React from 'react';
import './image-with-text.styles.scss';

function ImageWithText({ acf: { side_text, image }}) {

    return (
        <div className="image-with-text module container light-bg">
            <div className="image-container img-dropshadow">
                <img className="img-cover" src={image.url} alt={image.alt} />
            </div>
            <div className="side-text the-content" dangerouslySetInnerHTML={{ __html: side_text}} />    
        </div>
    )
}

export default ImageWithText;