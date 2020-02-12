import React from 'react';
import './App.css';
import HomePage from './components/HomePage.jsx';
import ContactPage from './components/ContactPage.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        homepage: true,
        contactpage: false
    }
  }

  handleHomePage = (e) => {
    this.setState({homepage:true, contact:false})
  }

  handleContactPage = (e) => {
    this.setState({homepage:false, contact:true})
  }


  viewSelect() {
    if (this.state.homepage) {
      return <HomePage handleHomePage={this.handleHomePage} handleContactPage={this.handleContactPage}/>
    }
    else if (this.state.contact) {
      return <ContactPage handleHomePage={this.handleHomePage} handleContactPage={this.handleContactPage}/>
    }
    
  }

  render() {
    return (
      this.viewSelect()
    )
  }
}

export default App;