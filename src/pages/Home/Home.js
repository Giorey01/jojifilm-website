import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import CardHome from '../../components/CardHome/CardHome'
import Background from '../../components/Sfondo/background';
import React from 'react';
import bg_1 from '../../components/Sfondo/background-image.jpg'
import bg_black from '../../assets/wallpapers/black.jpg'
import Carousel from 'react-bootstrap/Carousel';

import carousel_1 from '../../assets/wallpapers/a.png'
import carousel_2 from '../../assets/wallpapers/b.png'
import carousel_3 from '../../assets/wallpapers/c.png'
import './Home.css'

function Home() {
    const SectionStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover'
    }

    const CarouseInterval = 3500;

    return (
        <>
            <Fullpage>
                <FullpageNavigation />
                <FullPageSections>
                    <FullpageSection>
                    <div className="z-0 position-relative vh-100 overflow-hidden d-flex align-items-center">
                        <Background />
                        <div className='z-3 container text-align-center justify-content-center gap-3'>
                            <CardHome />
                            <h5 class="card-title">HELLO!</h5>
                        </div>
                        </div>
                    </FullpageSection>
                    <FullpageSection style={{ ...SectionStyle, backgroundImage: `url(${bg_black})` }}>
                        <div className='container' style={{height: '50%', width: '100%'}}>
                            <Carousel>
                                <Carousel.Item interval={CarouseInterval}>
                                    <img src={carousel_1} alt='...' className='carosellino border border-5 img-fluid'/>
                                </Carousel.Item>
                                <Carousel.Item interval={CarouseInterval}>
                                    <img src={carousel_2} alt='...' className='carosellino border border-5 img-fluid'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={carousel_3} alt='...' className='carosellino border border-5 img-fluid'/>
                                </Carousel.Item>
                            </Carousel>
                            <h1>sara é una bella ragazza</h1>
                        </div>
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </>
    );
}

export default Home;