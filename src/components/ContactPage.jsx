import React from 'react'
import './ContactPage.css'
import {Link} from "react-router-dom";

class ContactPage extends React.Component {

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
               <div className='Page-contact'>
                EMAIL
               </div>
               

            </div>
        )
    }
}

export default ContactPage