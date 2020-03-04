import React from 'react';

import { connect } from 'react-redux';

const currentRoomDescription = ({ initInfo }) => {
	return (
		<div>
			<h1>ROOM: {initInfo.title}</h1>
			<h2>DESCRIPTION: {initInfo.description}</h2>
			<h3>
				PLAYERS WITH YOU:{' '}
				{initInfo.players &&
					initInfo.players.map((user) => {
						return `${user}, `;
					})}
			</h3>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		initInfo: state.initInfo,
		error: ''
	};
};

export default connect(mapStateToProps)(currentRoomDescription);
