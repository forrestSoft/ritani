import React from 'react';

function Search(){
	function onInputChange(){
		console.log('a')
	}
	return(
		<React.Fragment>
			<span>Please search for a github user by their <em>username</em></span>
			<input onChange={onInputChange} />
		</React.Fragment>
	)
}

export default Search;