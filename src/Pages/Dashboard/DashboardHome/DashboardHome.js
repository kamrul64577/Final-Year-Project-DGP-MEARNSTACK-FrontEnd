import React from 'react';
import img from '../../../images/dashboard.jpg'
import './DashboardHome.css'
const DashboardHome = () => {
    return (
        <div className='dashboard-home'>
            <img style={{width:'100vw', height:'80vh'}} className="img-fluid" src={img} alt="" />
        </div>
    );
};

export default DashboardHome;