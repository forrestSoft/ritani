import React from 'react';
import Avatar from './Avatar'

function DisplayResults(props){
	return(
		<React.Fragment>
			<p>I am results</p>
			<ul>
			{ 
				props.users && props.users.map( (data, i) => {
					return <Avatar url={data.avatar_url} key={data.avatar_url}/>
				}) 
			}
			</ul>
		</React.Fragment>
	)
}

export default DisplayResults;