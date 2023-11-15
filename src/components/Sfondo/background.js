import backgroundimage from './background-image.jpg'
import Grain from '../../components/GrainFx/Grain';
import React from 'react';
function Background() {
    return (
        <>
            <img
                src={backgroundimage}
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt="Immagine a tutto schermo"
            />
            <Grain />
        </>
    );
}


export default Background;