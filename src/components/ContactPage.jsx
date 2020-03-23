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
                    <p className='text'>
                    I can be contacted through <a href="https://www.linkedin.com/in/prithviraj-yuvaraj/">LinkedIn</a>, by email at <a href="mailto:ryuvaraj37@gmail.com">ryuvaraj37@gmail.com</a>. <br/>
                    My projects can be found on my <a href="https://github.com/pyuvaraj37">github</a>.
                    </p>
               </div>
               

            </div>
        )
    }
}

export default ContactPage