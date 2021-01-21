import React, {useReducer} from 'react';
import {Context} from './context';
import {reducer, init} from './reducer';

export const State = ({children, initialState}) => {
	const [state, dispatch] = useReducer(reducer, initialState, init);

	const showWin = () => dispatch({type: 'APP/WIN'});

	const nextRound = () => dispatch({type: 'APP/NEXT_ROUND'});

	const addMatch = () => dispatch({type: 'APP/ADD_MATCH'});

	const appReset = () => dispatch({type: 'APP/RESET', payload: initialState});

	const pickTile = id => dispatch({type: 'TILE/PICK', payload: id});

	const unpickTiles = () => dispatch({type: 'TILE/UNPICK'});

	const matchTiles = (id1, id2) => dispatch({type: 'TILE/MATCH', payload: [id1, id2]});

	const handleClick = id => {
		if (state.pickedTiles.length === 2) {
			return;
		}

		pickTile(id);

		if (state.pickedTiles.length) {
			const tile1_id = state.pickedTiles[0];
			const tile2_id = id;
			const tile1_color = tile1_id.split('-')[1];
			const tile2_color = id.split('-')[1];

			if (tile1_color === tile2_color) {
				setTimeout(() => {
					matchTiles(tile1_id, tile2_id);
					if (state.matchedTiles.length === 14) {
						showWin();
					}
					addMatch();
				}, 1000);
			} else {
				setTimeout(() => {
					unpickTiles();
					nextRound();
				}, 2000);
			}
		}
	};

	return (
		<Context.Provider value={{
			win: state.win,
			round: state.round,
			matches: state.matches,
			appReset,
			pickedTiles: state.pickedTiles,
			matchedTiles: state.matchedTiles,
			tiles: state.tiles,
			handleClick
		}}>
			{children}
		</Context.Provider>
	);
}
