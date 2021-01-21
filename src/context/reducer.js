export function init(initialState) {
	return {
		win: false,
		round: 1,
		matches: 0,
		pickedTiles: [],
		matchedTiles: [],
		tiles: getInitialTiles()
	};
}

export const reducer = (state, action) => {
	switch (action.type) {
		case 'APP/WIN':
			return {...state, win: true};
		case 'APP/NEXT_ROUND':
			return {...state, round: state.round + 1};
		case 'APP/ADD_MATCH':
			return {...state, matches: state.matches + 1};
		case 'APP/RESET':
			return init(action.payload);
		case 'TILE/PICK':
			return {...state, pickedTiles: state.pickedTiles.concat([action.payload])};
		case 'TILE/UNPICK':
			return {...state, pickedTiles: []};
		case 'TILE/MATCH':
			return {
				...state,
				pickedTiles: [],
				matchedTiles: state.matchedTiles.concat(action.payload)
			};
		default:
			return state;
	}
};

function getInitialTiles() {
	const colors = [
		'black',
		'green',
		'red',
		'blue',
		'brown',
		'orange',
		'yellow',
		'pink'
	];

	const tiles = [...colors, ...colors]
		.sort((a, b) => 0.5 - Math.random())
		.map((color, index) => ({
			id: `${index}-${color}`,
			color: color
		}));

	return tiles;
}
