import React from 'react';

function Avatar(props){
	return(
		<React.Fragment>
			<img src={props.url} />
		</React.Fragment>
	)
}

export default Avatar;