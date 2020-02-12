import React from 'react'
import './HomePage.css'
import {Link} from "react-router-dom";

class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div className='Home-page'>
                <div className='Nav-bar'>
                    <Link to="/" className='tabs'>Home</Link>
                    <Link to="/project" className='tabs'>Project</Link>
                    <Link to="/education" className='tabs'>Education</Link>
                    <Link to="/contact" className='tabs'>Contact</Link>
               </div>
               <div className='Page-home'>
                <p>Welcome to my Portfolio.</p>
                <p>Use the top navigation bar.</p>
               </div>
                

               

            </div>
        )
    }
}

export default HomePage