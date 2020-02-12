import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import EducationPage from './components/EducationPage.jsx'
import ContactPage from './components/ContactPage.jsx';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        homepage: true,
        projectpage: false,
        educationpage: false,
        contactpage: false        
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
  function Home() {
    return <HomePage/>
  }
  
  function Project() {
    return <ProjectPage/>
  }
  
  function Education() {
    return <EducationPage/>
  }

  function Contact() {
    return <ContactPage/>
  }
  


export default App;