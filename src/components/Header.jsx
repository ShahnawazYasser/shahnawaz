import React from "react";
import '../styles/Header.css';

const Header = () => {

    return (
        <header className="header">
            <nav className="header nav">
                <ul className="header nav ul">
                    <li className="header nav ul li"><a href = "/" className="header nav ul li a">Home</a></li>
                    <li className="header nav ul li"><a href = "about" className="header nav ul li a">About</a></li>
                    <li className="header nav ul li"><a href = "blog" className="header nav ul li a">Blog</a></li>
                    <li className="header nav ul li"><a href = "testimonials" className="header nav ul li a">Testimonials</a></li>
                    <li className="header nav ul li"><a href = "contact" className="header nav ul li a">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;