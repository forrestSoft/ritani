import React, { Component } from 'react'
import axios from 'axios'
import {parse_link_header} from './utils'

import Search from './components/Search'
import DisplayResults from './components/DisplayResults'

import './App.css';
import 'normalize.css'

class App extends Component {
  state = {
    hasMoar: false,
    selectedUser: false,
    followers: [],
    totalFollowers: 0
  }

  handleClick(user, event){
    event.stopPropagation()

    const xhr1 = axios(`https://api.github.com/users/${user}/followers`)
    const xhr2 = axios(`https://api.github.com/users/${user}`)

    Promise.all([xhr1, xhr2])
      .then((xhrs)=>{
        this.setState({
          followers: xhrs[0].data,
          hasMoar: (xhrs[0].headers.link && parse_link_header(xhrs[0].headers.link).next) || false,
          totalFollowers: xhrs[1].data.followers,
          selectedUser: user
        })
      })
  }

  handleMoar(){
    axios(this.state.hasMoar)
      .then((xhr)=>{
        this.setState((prevState, props)=>{
          return ({
            followers: [...prevState.followers, ...xhr.data],
            hasMoar: (xhr.headers.link && parse_link_header(xhr.headers.link).next) || false
          })
        })
      })
  }

  render(){
    return (
      <div className="App" >
        <header className="App-header">Ritani interview assesment</header>
        <div className="flex">
          <section className="gr-2">
            <Search
              handleChange={ this.handleChange  }
              handleClick={this.handleClick.bind(this)}
            />
          </section>
          
          <section className="gr-1">
            <DisplayResults 
              users={this.state.followers}
              hasMoar={this.state.hasMoar}
              handleClick={this.handleMoar.bind(this)}
              selectedUser={this.state.selectedUser}
              totalFollowers={this.state.totalFollowers}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App