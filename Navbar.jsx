// components/Navbar.tsx
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar2 ">
            <div className="navbar22 ">
                <div className="nav-links">
                    <a href="#"><a>Help</a></a>
                    <span>•</span>
                    <a href="#"><a>Status</a></a>
                    <span>•</span>
                    <a href="#"><a>Writers</a></a>
                </div>
                <div className="nav-info">
                    <a href="tel:+19702621413"> (970) 262-1413</a>
                    <a href="mailto:address@gmail.com"> address@gmail.com</a>
                    <span className="weather"> Bangladesh 28°C</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
