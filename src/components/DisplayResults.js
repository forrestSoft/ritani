import React from 'react'
import Avatar from './Avatar'
import './DisplayResults.scss'

function DisplayResults(props){
	console.log(props)
	return(
		<section className="display_results">
		{ props.selectedUser &&
			<p><em>{props.selectedUser}</em> has {props.totalFollowers} followers</p>
		}
			<div>
			{ 
				props.users && props.users.map( (data, i) => {
					return <Avatar 
						url={data.avatar_url} 
						username={data.login} 
						key={data.avatar_url}/>
				}) 
			}
			</div>
			{ 
				props.hasMoar &&
					<button onClick={props.handleClick} >Load Moar</button>
				
			}
		</section>
	)
}

export default DisplayResults;