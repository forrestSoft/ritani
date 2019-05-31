import React from 'react'

import Avatar from './Avatar'
import './Autosuggest.scss'

function handleA(login,f,e){
	e.preventDefault()
}

function Autosuggest(props){
	return(
		<div className="autosuggest">
			<span className={props.loading ? 'loading' : null }>
				<input 
					value={props.value} 
					onChange = { props.onChange } 
					placeholder="GitHub Username" 
					className={props.loading ? 'loading' : null }/>
				</span>
			 { (props.open) ? 
			 	<div>
					<ul>
						{ 
							props.users && props.users.map( (item, i) => {
								return (
									<li key={item.login} onClick={props.onClick.bind(this, item.login)} >
										<Avatar url={item.avatar_url} login={item.login} />
										<div>
											<p>{item.login}</p>
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
				</div> : null }
		</div>
	)
}

export default Autosuggest