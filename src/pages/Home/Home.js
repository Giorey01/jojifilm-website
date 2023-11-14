import CardHome from '../../components/CardHome/CardHome'
import Background from '../../components/Sfondo/background';


function Home() {
    return (
        <>
            <div className="z-0 position-relative vh-100 overflow-hidden d-flex align-items-center">
                <Background />
                <div className='z-3 container text-align-center justify-content-center gap-3'>
                    <CardHome />
                    <h5 class="card-title">HELLO!</h5>
                </div>
            </div>
        </>
    );
}

export default Home;