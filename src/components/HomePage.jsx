import React from 'react'
import './HomePage.css'

class HomePage extends React.Component {

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
            <div className='Home-page'>
                <div className='Nav-bar'>
                   <p onClick={this.handleHomePage} className='tabs'>Welcome</p>
                   <p>Projects</p>
                   <p>Education</p>
                   <p onClick={this.handleContactPage} className='tabs'>Contact</p>
               </div>
               <div className='Page-home'>
                Hello
               </div>
                

               

            </div>
        )
    }
}

export default HomePage