import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPic from '../../images/notFound.svg'
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div className="text-center">
            <Navigation></Navigation>
            <img src={NotFoundPic} alt="" style={{ height: '80vh' }} />
            <h4 className="my-3">
                <Link to="./" style={{ color: 'white', textDecoration: 'none', backgroundColor: '#263238', padding: '10px 15px' }}>Go to home page</Link>
            </h4>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;