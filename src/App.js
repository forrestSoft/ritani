import React, { Component } from 'react'
import Search from './components/Search'
import DisplayResults from './components/DisplayResults'

import staticState from './staticState'
import './App.css';

class App extends Component {
  state = {
    users: '',
    hasMoar: false
  }

  handleChange(e){
    this.setState({users: staticState, hasMoar: true})
  }

  handleClick(e){
    this.setState({users: [...staticState, ...staticState], hasMoar: false})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">Ritani interview assesment</header>
        <section>
          <Search handleChange={this.handleChange.bind(this)} />
        </section>
        
        <section>
          <DisplayResults 
            users={this.state.users} 
            handleClick={this.handleClick.bind(this)} 
            hasMoar={this.state.hasMoar}
          />
        </section>
      </div>
    );
  }
}

export default App;
