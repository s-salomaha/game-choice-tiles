import React, {useContext} from 'react';
import {Tile} from '../components/Tile';
import {Context} from '../context/context';

export const Board = () => {
	const {
		handleClick,
		pickedTiles,
		matchedTiles,
		tiles
	} = useContext(Context);

	return (
		<div className="board">
			{tiles.map(tile => (
				<Tile
					tile={tile}
					handleClick={handleClick}
					picked={pickedTiles.indexOf(tile.id) === -1 ? false : true}
					matched={matchedTiles.indexOf(tile.id) === -1 ? false : true}
					key={tile.id}
				/>
			))}
		</div>
	);
};
