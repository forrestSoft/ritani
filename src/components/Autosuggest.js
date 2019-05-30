import React from 'react'

import Avatar from './Avatar'

function Autosuggest(props){
	return(
		<React.Fragment>
			<input value={props.value} onChange = { props.onChange } />
			 { (props.open) ? 
			 	<div>
					<ul>
						{ 
							props.autocomplete_users && props.autocomplete_users.map( (item, i) => {
								return (
									<li key={item.login} onClick={props.onClick.bind(this, item.login)} >
										<Avatar url={item.avatar_url} />
										{item.login}
									</li>
								)
							})
						}
					</ul> 
					<p>{`total users from this query: ${props.autocomplete_total}`}</p> 
				</div> : null }

			
		</React.Fragment>
	)
}

export default Autosuggest