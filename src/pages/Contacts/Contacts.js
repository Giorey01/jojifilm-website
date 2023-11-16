import './Contact.css'
import React from 'react';
import Background from '../../components/Sfondo/background';


function Contacts() {
    return (
        <>  <Background/>
            <div class="external align-items-center border border-1">
                <div class="horizontal-scroll-wrapper">
                    <div class="img-wrapper slower">
                        <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener"><img className='sliding-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg" alt="" />
                        </a>
                    </div>

                    <div class="img-wrapper faster">
                        <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
                            <img className='sliding-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt="" />
                        </a>
                    </div>

                    <div class="img-wrapper slower vertical">
                        <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
                            <img className='sliding-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt="" />
                        </a>
                    </div>

                    <div class="img-wrapper slower slower-down">
                        <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
                            <img className='sliding-img' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt="" />
                        </a>
                    </div>     
                </div>
            </div>


        </>
    );
}

export default Contacts;