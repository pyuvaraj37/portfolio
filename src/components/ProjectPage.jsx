import React from 'react'
import './ProjectPage.css'
import {Link} from "react-router-dom";
import vch from "./assets/vch.jpeg"
import node from './assets/node.png'

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
                        <img src={vch} alt="Valley CHildrens Hospital" className='logo'/>
                    </div>

                    <p className='text'>
                        Kids View <br/>
                        <br/>
                        A web application that can be used by children proctored by their parents to perform a Neurological Eye Exam. <br/>
                        Our team was sponsored by Doctor Javier Fonseca, from Valley Children's Hospital in Fresno, Califonria. <br/>
                        <br/>
                        The front-end was created using Javascript and HTML, with the React framework. <br/>
                        The Visual Acuity portion of the exam was to replicate a snellen eye chart exam. A child is prompted to cover one eye and stand a set distance from the screen, and read the letters. A parent then enters the correct anwsers. <br/>
                        An opensource eye movement tracking software was used to record the coordinates during the Eye Movement exam, where children will follow the an animation on the screen. <br/>
                        <br/>
                        All data was collected into a SQL database using Flask for Python. <br/>
                        Due to the nature of the sensitive data, the patient information would only be able to be accessed by the doctor. <br/>
                        A doctor can retreive patient exam results, by using either the patients last name, or patient id. <br/>
                        <br/>
                        Top Finisher at UC Merced's Innovate to Grow Technology Expostion. <br/>
                    </p>

               </div>

               <div className='Page-project'>

                    <p className='text'> 
                        Wireless Sensor Network System <br/>
                        <br/>
                        A project for my Computer Networking course. The tasks were to use NesC, to create a TinyOS application. <br/>
                        Each node will be able to use it's radio to find neighboring nodes, route packets, and set up TCP connections to send data. <br/>
                        <br/>
                        Each wirless sensor is able to flood packets to discovery their neighbots, by using pings and ping replies. <br/>
                        After creating a neighbor list, a node is able to calculate the best paths (least hops) to each node with Link-State Routing. <br/>
                        Two nodes can setup a TCP connection using SYN/ACK packets to send data. <br/>
                        <br/>
                        This project was to implement the network and transport layer of the OSI model. <br/>
                        NesC is a version of C, which is used on TinyOS wireless sensors such as Micaz hardware. <br/>
                        
                    </p>

                    <div className='image'>
                        <img src={node} alt="Node Network" className='logo'/>
                    </div>

               </div>
                

            </div>
        )
    }
}

export default ProjectPage