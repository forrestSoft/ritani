import React, { Component } from 'react'
import axios from 'axios'
import { default as debounce } from 'awesome-debounce-promise';
import {parse_link_header} from './utils'

import Search from './components/Search'
import DisplayResults from './components/DisplayResults'

import './App.css';
import 'normalize.css'


const unbounced_handleChange = (text) => {
  return axios(`https://api.github.com/search/users?q=${text}`)
}

const autocomplete_debounce = debounce(unbounced_handleChange, 500)

class App extends Component {
  state = {
    hasMoar: false,
    selectedUser: false,
    followers: [],
    inputValue: '',
    autocomplete_users: 0,
    autocomplete_total: 0,
    autocomplete_open: false,
    totalFollowers: 0,
    search_loading: false
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
        selectedUser: user, 
        inputValue: user
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
              autocomplete_users={this.state.autocomplete_users}
              autocomplete_total={this.state.autocomplete_total}
              autocomplete_value={this.state.inputValue}
              autocomplete_open={this.state.autocomplete_open} 
              loading={this.state.search_loading} />
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