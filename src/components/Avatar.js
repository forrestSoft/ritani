import React from 'react';
import './Avatar.scss'

function Avatar(props){
	return(
		<React.Fragment>
			<div className="avatar_wrapper">
				<img src={props.url} alt={'avatar for github user ' + props.login}/>
			</div>
		</React.Fragment>
	)
}

export default Avatar;