import React from 'react'
import './EducationPage.css'
import {Link} from "react-router-dom";

class EducationPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div className='Education-page'>
                <div className='Nav-bar'>
                    <Link to="/" className='tabs'>Home</Link>
                    <Link to="/project" className='tabs'>Project</Link>
                    <Link to="/education" className='tabs'>Education</Link>
                    <Link to="/contact" className='tabs'>Contact</Link>
               </div>
               <div className='Page-education'>
                <p>I went to UC Merced.</p>
                <p>Classes i've taken</p>
               </div>
                

               

            </div>
        )
    }
}

export default EducationPage