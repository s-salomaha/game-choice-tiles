import React from 'react';

export const Tile = ({tile, handleClick, picked, matched}) => (
	<div
		className={`tile ${picked ? ' tile--picked':''}${matched ? ' tile--matched':''}`}
		onClick={() => handleClick(tile.id)}
	>
		<div className="tile__inner">
			<div className="tile__front"/>
			<div
				className="tile__back"
				style={{backgroundColor: tile.color}}
			/>
		</div>
	</div>
);
