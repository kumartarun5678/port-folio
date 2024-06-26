import React, { useState } from 'react';
import './layout.css';
import Home from "../../Pages/Home/Home";
import {RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import Menus from '../Menus/Menus';

const Layout = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="sidebar-section">
            <div className={toggle?("sidebar-toogle sidebar"):("sidebar")}>
                <div className="sidebar-toggle-icon">
                    <p onClick={handleToggle}>
                        {toggle?(<RiArrowRightDoubleFill size={30} />):
                        (<RiArrowLeftDoubleFill size={30} />)}
                    </p>
                </div>
                <Menus toggle={toggle}/>
            </div>
            <div className="container">
                <Home />
            </div>
        </div>
    );
};

export default Layout;
