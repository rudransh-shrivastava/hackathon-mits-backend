import React from 'react';
import Navbar from './navbar';

const Features = () => {
    return (
        <div className='flex justify-center mt-50'>
            <Navbar />
            <h1>Firewall Features</h1>
            <br/>
            <ul>
                <li>Real-time Traffic Monitoring</li>
                <li>Intrusion Detection and Prevention</li>
                <li>Advanced Threat Protection</li>
                <li>Application Control</li>
                <li>Web Filtering</li>
                <li>VPN Support</li>
                <li>Customizable Security Policies</li>
            </ul>
        </div>
    );
};

export default Features;