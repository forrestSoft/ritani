import React from 'react'

function Search(props){
	return(
		<React.Fragment>
			<span>Please search for a github user by their <em>username</em></span>
			<input onChange={props.handleChange} />
		</React.Fragment>
	)
}

export default Search