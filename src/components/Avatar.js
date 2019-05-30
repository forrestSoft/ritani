import React from 'react';

function Avatar(props){
	return(
		<React.Fragment>
			<div className="avatar_wrapper">
				<img src={props.url} alt={'avatar for github user ' + props.username}/>
			</div>
		</React.Fragment>
	)
}

export default Avatar;