import React from 'react'
import './HomePage.css'
import {Link} from "react-router-dom";
import snow from './assets/me_snow.JPG'

class HomePage extends React.Component {

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
                    <Link to="/project" className='tabs'>Projects</Link>
                    <Link to="/education" className='tabs'>Education</Link>
                    <Link to="/contact" className='tabs'>Contact</Link>
               </div>
               <div className='Page-home'>
                <div className='image'>
                <img src={snow} alt="me in snow" className='resize'/>
                </div>
                
                <h1>
                    My name is Prithviraj Yuvaraj,<br/>
                    Welcome to my portfolio!<br/>
                </h1>  


               </div>
                

               

            </div>
        )
    }
}

export default HomePage