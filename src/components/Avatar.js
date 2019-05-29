import React from 'react';

function Avatar(props){
	return(
		<React.Fragment>
			<img src={props.url} alt={'avatar for github user ' + props.username}/>
		</React.Fragment>
	)
}

export default Avatar;