import Background from '../../components/Sfondo/background';
import './Contact.css'

function Contacts() {
    return (
        <>
            <div className="z-0 position-relative vh-100 overflow-hidden d-flex align-items-center">
                <Background />
                <div className='z-3 container text-align-center justify-content-center gap-3'>
                    <h1>Manuel frociazzo</h1>
                </div>
            </div>
        </>
    );
}

export default Contacts;