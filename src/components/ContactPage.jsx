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

    render() {
        return(
            <div className='App'>
                <header className="App-header">
                    <h1>EMAIL!</h1>
                </header>
            </div>
        )
    }
}

export default ContactPage