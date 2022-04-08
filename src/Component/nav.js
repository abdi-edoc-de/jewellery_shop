import { FaSignOutAlt } from "react-icons/fa";
import React from 'react';
import './nav.css';
import Card from './card'
 function nav() {
    return (
        <div className='main'>
            <header class="masthead">
                <div class="brand-container">
                    <a href="#">
                        <span class="brand-initials">BN</span>
                        <span class="brand-name">Brand Name</span>
                    </a>
                </div>
                <nav>
                    <div class="nav-container">
                        <div>
                            <input id="slider1" name="slider1" type="checkbox"/>
                            <label class="slide has-child" for="slider1">
                                <span class="element">P</span>
                                <span class="name">Products</span>
                            </label>
                           
                        </div>
                        <div>
                            <a class="slide" href="#">
                                <span class="element">F</span>
                                <span class="name">Finished</span>
                            </a>
                        </div>
                        <div>
                            <input id="slider2" name="slider2" type="checkbox"/>
                            <label class="slide has-child" for="slider2">
                                <span class="element">AP</span>
                                <span class="name">Add Products</span>
                            </label>
                           
                        </div>
                        
                        <div>
                            <a class="slide" href="#">
                                <span class="element"><FaSignOutAlt/></span>
                                <span class="name">Log Out</span>
                            </a>
                        </div>
                    </div>
                </nav>
                <div class="social-container">
                    <span>
                        <a class="social-roll github" href="#"></a>
                    </span>
                    <span>
                        <a class="social-roll twitter" href="#"></a>
                    </span>
                    <span>
                        <a class="social-roll linkedin" href="#"></a>
                    </span>
                    <span>
                        <a class="social-roll rss" href="#"></a>
                    </span>
                </div>
            </header>
            
        </div>
    )
}
export default nav;