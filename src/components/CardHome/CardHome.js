import './CardHome.css'
import card1 from './card1.jpg'
import card2 from './card2.jpg'
import card3 from './card3.jpg'
import React from 'react';

function CardHome() {
    return (
        <>
        <div className='d-flex container gap-5'>
            <div class="card mx-auto bg-transparent d-none d-sm-none d-md-block">
                <img class="card-img-top home-card" src={card1} alt="Card image cap"/>
                    <div class="card-body">
                    </div>
            </div>
            <div class="card mx-auto bg-transparent d-none d-sm-none d-md-block">
                <img class="card-img-top home-card" src={card2} alt="Card image cap"/>
            </div>
            <div class="card mx-auto bg-transparent d-none d-sm-none d-md-block">
                <img class="card-img-top home-card" src={card3} alt="Card image cap"/>
                    <div class="card-body">
                    </div>
            </div>

            <div class="card mx-auto bg-transparent d-block d-sm-none">
                <img class="card-img-top home-card" src={card1} alt="Card image cap"/>
            </div>
        </div>
        </>
    );
}


export default CardHome;