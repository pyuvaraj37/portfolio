import React from 'react'
import './ContactPage.css'

class ContactPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    handleHomePage = (e) => {
        return this.props.handleHomePage() 
    }

    handleContactPage = (e) => {
        return this.props.handleContactPage() 
    }

    render() {
        return(
            <div className='Contact-page'>
                <div className='Nav-bar'>
                   <p onClick={this.handleHomePage} className='tabs'>Welcome</p>
                   <p>Projects</p>
                   <p>Education</p>
                   <p onClick={this.handleContactPage} className='tabs'>Contact</p>
               </div>
               <div className='Page-contact'>
                EMAIL
               </div>
               

            </div>
        )
    }
}

export default ContactPage