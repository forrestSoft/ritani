import React from 'react'
import Avatar from './Avatar'
import './DisplayResults.scss'

function DisplayResults(props){
	if(!props.selectedUser){
		return buildPlaceholder()
	}else{
		return buildFollowers(props)
	}
}

export default DisplayResults;

function buildPlaceholder(){
	return (
		<React.Fragment>
			<h2>Welcome. Please search to the left</h2>
			<p>The code for this project is here: <a target="blank" href="https://github.com/forrestSoft/ritani">GitHub ⇛</a></p>
		</React.Fragment>
	)
}

function buildFollowers(props){
	return (
		<section className="display_results">
			{props.selectedUser && (
				<h2><em>{props.selectedUser}</em> has {props.totalFollowers} followers</h2>
			)}
			<div>
			{props.users && props.users.map( (data, i) => {
					return (
						<Avatar 
							url={data.avatar_url} 
							username={data.login} 
							key={data.avatar_url}
						/>
					)
				})}
			</div>
			{props.hasMoar && <button onClick={props.handleClick} >Load Moar</button>}
		</section>
	)
}