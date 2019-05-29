import React from 'react'
import Avatar from './Avatar'

function DisplayResults(props){
	return(
		<React.Fragment>
			<p>I am results</p>
			<ul>
			{ 
				props.users && props.users.map( (data, i) => {
					return <Avatar url={data.avatar_url} username={data.login} key={data.avatar_url}/>
				}) 
			}
			</ul>
			{ 
				props.hasMoar === true &&
					<button onClick={props.handleClick} >Load Moar</button>
				
			}
		</React.Fragment>
	)
}

export default DisplayResults;