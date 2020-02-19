import React from 'react'
import './ProjectPage.css'
import {Link} from "react-router-dom";

class ProjectPage extends React.Component {

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
               <div className='Page-project'>
                <p>Here are my projects.</p>
                <p>List of them.</p>
               </div>
                

            </div>
        )
    }
}

export default ProjectPage