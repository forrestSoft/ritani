import React from 'react'

import Avatar from './Avatar'
import './Autosuggest.scss'

function Autosuggest(props){
	return(
		<div className="autosuggest">
		{console.log('a',props.loading)}
			
			<span className={props.loading ? 'loading' : null }>
			<input value={props.value} onChange = { props.onChange } placeholder="GitHub Username" className={props.loading ? 'loading' : null }/></span>
			 { (props.open) ? 
			 	<div>
					<ul>
						{ 
							props.autocomplete_users && props.autocomplete_users.map( (item, i) => {
								return (
									<li key={item.login} onClick={props.onClick.bind(this, item.login)} >
										<Avatar url={item.avatar_url} login={item.login} />
										<div>
											<p>{item.login}</p>
											<a href={item.html_url}>{item.html_url.replace(/https.+?com/, '')}</a>
										</div>
									</li>
								)
							})
						}
					</ul> 
					<span>{`Total users from this query: ${props.autocomplete_total}`}</span> 
				</div> : null }

			
		</div>
	)
}

export default Autosuggest