import React, { Component } from 'react'
import Search from './components/Search'
import DisplayResults from './components/DisplayResults'

import staticState from './staticState'
import './App.css';

class App extends Component {
  state = {
    users: ''
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({users: staticState})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">Ritani interview assesment</header>
        <section>
          <Search handleChange={this.handleChange.bind(this)}/>
        </section>
        
        <section>
          <DisplayResults users={this.state.users}/>
        </section>
      </div>
    );
  }
}

export default App;
