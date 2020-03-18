import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar'

class App extends Component {
  render(){
    return (
      <div className='app'>
        <Container className="main">
          <NavBar/>
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;
