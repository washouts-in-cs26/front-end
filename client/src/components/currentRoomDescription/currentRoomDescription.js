import React from 'react';

import { connect } from 'react-redux';

const CurrentRoomDescription = (props) => {
    const {mapData, playerData, initInfo, isFetching, error, getData, getInit} = props

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

const mapStateToProps = state => {
    return {
       mapData: state.mapData,
       playerData: state.playerData,
       initInfo: state.initInfo,
       isFetching: state.isFetching,
       error: state.error
    }
}

export default connect(mapStateToProps)(CurrentRoomDescription);
