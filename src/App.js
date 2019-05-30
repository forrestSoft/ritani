import React, { Component } from 'react'
import axios from 'axios'
import { default as debounce } from 'awesome-debounce-promise';
import {parse_link_header} from './utils'

import Search from './components/Search'
import DisplayResults from './components/DisplayResults'

import staticState from './staticState'
import './App.css';


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
    autocomplete_open: false
  }

  // TODO: is this really the best way to deal with debouncing?
  handleChange = async (e) => {
    this.setState({inputValue: e.target.value})

    const result = await autocomplete_debounce(e.target.value)
    this.setState({
      autocomplete_users: result.data.items.slice(0,5),
      autocomplete_total: result.data.total_count,
      autocomplete_open: true
    })
  }

  // TODO: this is atrocious and I should be flogged
  handleClick(user, event){
    this.setState((prevState, props)=>{
      axios(`https://api.github.com/users/${user}/followers`)
      .then((xhr)=>{
        this.setState({
          followers: xhr.data,
          hasMoar: (xhr.headers.link && parse_link_header(xhr.headers.link).next) || false
        })
      })

      return {
        selectedUser: user, 
        inputValue: user, 
        autocomplete_open: false}
      })  
  }

  // This is so slimey
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

  handleClose(){
    this.setState({autocomplete_open: false})
  }

  render(){
    return (

      <div className="App" onClick={this.handleClose.bind(this)} >
        <header className="App-header">Ritani interview assesment</header>
        <div className="flex">
          <section class="gr-2">
            <Search
              handleChange={ this.handleChange  }
              handleClick={this.handleClick.bind(this)}
              autocomplete_users={this.state.autocomplete_users}
              autocomplete_total={this.state.autocomplete_total}
              autocomplete_value={this.state.inputValue}
              autocomplete_open={this.state.autocomplete_open} />
          </section>
          
          <section class="gr-1">
            <DisplayResults 
              users={this.state.followers}
              hasMoar={this.state.hasMoar}
              handleClick={this.handleMoar.bind(this)}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App