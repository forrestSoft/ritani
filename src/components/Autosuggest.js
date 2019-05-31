import React from 'react'

import Avatar from './Avatar'
import './Autosuggest.scss'

function handleA(login,f,e){
	e.preventDefault()
}

function Autosuggest(props){
	return(
		<div className="autosuggest">
			<section className={props.loading ? 'loading' : null }>
				<input 
					value={props.value} 
					onChange = { props.onChange } 
					placeholder="GitHub Username" 
					className={props.loading ? 'loading' : null }
				/>
			</section>
			{(props.open) && buildList(props)} 

		</div>
	)
}

export default Autosuggest;

function buildList (props){
	handleA = handleA.bind
	return (
		<nav>
			<ul>
				{props.users && props.users.map( (item, i) => {
						return (
							<li key={item.login} onClick={props.onClick.bind(this, item.login)} >
								<Avatar url={item.avatar_url} login={item.login} />
								<div>
									<h4>{item.login}</h4>
									<a 
										onClick={handleA.bind(this, item.login, props.onClick)}
										href={item.html_url}>{item.html_url.replace(/https.+?com/, '')}
									</a>
								</div>
							</li>
						)
					})
				}
			</ul> 
			<aside>{`Total users from this query: ${props.total}`}</aside> 
		</nav>
	)
}