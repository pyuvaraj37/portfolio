import React from 'react'
import './EducationPage.css'
import {Link} from "react-router-dom";

import ucm from "./assets/ucm.png"
import python from "./assets/coding-images/python.png"
import java from "./assets/coding-images/java.png"
import cpp from "./assets/coding-images/c++.png"
import html from "./assets/coding-images/html.png"

import {
    BrowserView,
    MobileView,
} from "react-device-detect";

class EducationPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div className='page'>
                <div className='Nav-bar'>
                    <Link to="/" className='tabs'>Home</Link>
                    <Link to="/project" className='tabs'>Project</Link>
                    <Link to="/education" className='tabs'>Education</Link>
                    <Link to="/contact" className='tabs'>Contact</Link>
               </div>
            <BrowserView>
                <div className='Page-education'>
                
                    <h1>
                        Bachelors of Science <br/> 
                        in Computer Science and Engineering
                    </h1>

                    <div className='image'>
                        <img src={ucm} alt="UC Merced" className='resize'/>
                    </div>
            
                </div>

                <div className='Page-education'>

                    <div className='image'>
                        <img src={python} alt="python" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={java} alt="java" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={cpp} alt="c++" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={html} alt="html" className='icon'/>
                    </div>

                </div>

                <div className='Page-education'>
                    <a href="https://icons8.com/icons/set/python">Python icon</a> icon by <a href="https://icons8.com">Icons8</a>   
                    <a href="https://icons8.com/icons/set/java-coffee-cup-logo">Java icon</a> icon by <a href="https://icons8.com">Icons8</a>
                    <a href="https://icons8.com/icons/set/c-plus-plus-logo">C++ icon</a> icon by <a href="https://icons8.com">Icons8</a>
                    <a href="https://icons8.com/icons/set/html-5">Html 5 icon</a> icon by <a href="https://icons8.com">Icons8</a>
                </div>

            </BrowserView>

            <MobileView>
                <div className='Page-education-mobile'>

                    <div className='image'>
                        <img src={ucm} alt="UC Merced" className='resize'/>
                    </div>

                    <h1>
                        Bachelors of Science <br/> 
                        in Computer Science and Engineering
                    </h1>
            
                </div>

                <div className='Page-education-mobile'>

                    <div className='image'>
                        <img src={python} alt="python" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={java} alt="java" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={cpp} alt="c++" className='icon'/>
                    </div>

                    <div className='image'>
                        <img src={html} alt="html" className='icon'/>
                    </div>

                </div>

                <div className='Page-education-mobile'>
                    <a href="https://icons8.com/icons/set/python">Python icon</a> icon by <a href="https://icons8.com">Icons8</a>   
                    <a href="https://icons8.com/icons/set/java-coffee-cup-logo">Java icon</a> icon by <a href="https://icons8.com">Icons8</a>
                    <a href="https://icons8.com/icons/set/c-plus-plus-logo">C++ icon</a> icon by <a href="https://icons8.com">Icons8</a>
                    <a href="https://icons8.com/icons/set/html-5">Html 5 icon</a> icon by <a href="https://icons8.com">Icons8</a>
                </div>
            </MobileView>

            </div>
        )
    }
}

export default EducationPage