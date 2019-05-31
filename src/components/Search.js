import React from 'react'
import Autosuggest from './Autosuggest'
import './Search.scss'

// TODO manage auto suggest as a passed component and not spaghetti props
function Search(props){
	return(
		<section className="search">
		<h2>Search</h2>

			<Autosuggest 
				onChange={props.handleChange}
				onClick={props.handleClick}
				autocomplete_total={props.autocomplete_total}
				autocomplete_users={props.autocomplete_users}
				value={props.autocomplete_value}
				open={props.autocomplete_open}  
				loading={props.loading}/>
		</section>
	)
}

export default Search