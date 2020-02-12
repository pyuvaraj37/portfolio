import React from 'react'
import './HomePage.css'

class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    handleContactPage = (e) => {
        return this.props.handleContactPage() 
    }

    render() {
        return(
            <div className='Home-page'>
               <div className='Nav-bar'>
                   <p>Welcome</p>
                   <p>Projects</p>
                   <p>Education</p>
                   <p>Contact</p>
               </div>
            </div>
        )
    }
}

export default HomePage