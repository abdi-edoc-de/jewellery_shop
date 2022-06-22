import { FaSignOutAlt } from "react-icons/fa";
import React from 'react';
import './nav.css';

import { Link } from "react-router-dom";
import Tabs from "./tabs";
export default function Nav() {
    return (
        <div className='main'>
            <header class="masthead">
                <div class="brand-container">
                    <Link to="/product">
                        <span class="brand-initials">BN</span>
                        <span class="brand-name">Brand Name</span>
                    </Link>
                </div>
                <nav>
                    <div class="nav-container">
                        <Tabs to={'/'} letter={'P'} name={"Product"} />
                        <Tabs to={'/finished'} letter={'FP'} name={"Finished Product"} />
                        <Tabs to={'/unfinished'} letter={'UP'} name={"Unfinished Product"} />
                        <Tabs to={'/addProduct'} letter={'AP'} name={"Add Product"} />
                        <Tabs to={'/'} letter={<FaSignOutAlt/>} name={"Logout"} />
                    </div>
                </nav>
            </header>
        </div>
    )
}