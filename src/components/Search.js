import React, { Component } from 'react'
import axios from 'axios'
import { default as debounce } from 'awesome-debounce-promise';
import {parse_link_header} from '../utils'

import Autosuggest from './Autosuggest'
import './Search.scss'


const unbounced_handleChange = (text) => {
  return axios(`https://api.github.com/search/users?q=${text}`)
}

const autocomplete_debounce = debounce(unbounced_handleChange, 500)

class Search extends Component{
	state = {
		users: [],
    total: null,
    loading: false,
    open: false,
    inputValue: ''
	}

	handleChange = async (e) => {
    this.setState({
    	inputValue: e.target.value,
    	loading: true
    })

    const result = await autocomplete_debounce(e.target.value)
    this.setState({
      users: result.data.items.slice(0,5),
      total: result.data.total_count,
      open: true,
      loading: false
    })
  }

	render(){

		return(
			<section className="search">
			<h2>Search</h2>

				<Autosuggest 
					onChange={this.handleChange}
					onClick={this.props.handleClick}
					total={this.state.total}
					users={this.state.users}
					value={this.state.inputValue}
					open={this.state.open}
					loading={this.state.loading}/>
			</section>
		)
	}
}

export default Search