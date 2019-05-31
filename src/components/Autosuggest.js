import React from 'react'

import Avatar from './Avatar'
import './Autosuggest.scss'

function Autosuggest(props){
	return(
		<div className="autosuggest">
			<input value={props.value} onChange = { props.onChange } />
			 { (props.open) ? 
			 	<div>
					<ul>
						{ 
							props.autocomplete_users && props.autocomplete_users.map( (item, i) => {
								return (
									<li key={item.login} onClick={props.onClick.bind(this, item.login)} >
										<Avatar url={item.avatar_url} login={item.login} />
										<p>{item.login}</p>
									</li>
								)
							})
						}
					</ul> 
					<p>{`total users from this query: ${props.autocomplete_total}`}</p> 
				</div> : null }

			
		</div>
	)
}

export default Autosuggest