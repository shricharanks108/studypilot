import './NotFoundPage.css';
import logo from './illustatus.svg'

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <h1 className='not-found-text'>oop he not here</h1>
            <img
                alt=""
                src={logo}
                width="1300"
                height="800"
                className="not-found-img"
            />{' '}
        </div>
    );
}

export default NotFoundPage;