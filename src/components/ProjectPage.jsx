import React from 'react'
import './ProjectPage.css'
import {Link} from "react-router-dom";
import vch from "./assets/vch.jpeg"

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
                    <div className='image'>
                        <img src={vch} alt="Valley CHildrens Hospital" className='resize'/>
                    </div>

                    <p>
                        Worked in a team to complete a web application for Valley Children's Hospital in Fresno. <br/> 
                        Used React framework with HTML and CSS to create interface, while using flask with python for the SQL database. <br/>
                        The application was to mimic a Neurlogical Optic exam performed by a Doctor, capatable of visual acuity tests, and eye movement tracking. <br/>
                    </p>

               </div>

               <div className='Page-project'>
                    


               </div>
                

            </div>
        )
    }
}

export default ProjectPage