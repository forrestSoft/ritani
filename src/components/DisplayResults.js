import React from 'react'
import Avatar from './Avatar'

function DisplayResults(props){
	console.log(props)
	return(
		<React.Fragment>
			<ul>
			{ 
				props.users && props.users.map( (data, i) => {
					return <Avatar 
						url={data.avatar_url} 
						username={data.login} 
						key={data.avatar_url}/>
				}) 
			}
			</ul>
			{ 
				props.hasMoar &&
					<button onClick={props.handleClick} >Load Moar</button>
				
			}
		</React.Fragment>
	)
}

export default DisplayResults;