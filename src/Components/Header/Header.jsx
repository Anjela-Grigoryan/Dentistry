import { React , useState} from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <header className={s.header}>
            <div className={s.box}>
                <svg onClick={() => setOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" fill="currentColor" 
                    className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" 
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
                <nav className={s.links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Services">Our services</NavLink>
                    <NavLink to="/Contacts">Contact us</NavLink>
                </nav>
                <button className={s.button}><NavLink to="/Contacts">Book Now</NavLink></button>
            </div>
            <div className={`menu ${isOpen?"active":""}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Services">Our services</NavLink>
                <NavLink to="/Contacts">Contact us</NavLink>
            </div>
        </header>
    );
}

export default Header;
