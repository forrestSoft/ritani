import React from 'react'
import Autosuggest from './Autosuggest'

// TODO manage auto suggest as a passed component and not spaghetti props
function Search(props){
	return(
		<React.Fragment>
			<span>Please search for a github user by their <em>username</em></span>

			<Autosuggest 
				onChange={props.handleChange}
				onClick={props.handleClick}
				autocomplete_total={props.autocomplete_total}
				autocomplete_users={props.autocomplete_users}
				value={props.autocomplete_value}
				open={props.autocomplete_open}  />
		</React.Fragment>
	)
}

export default Search