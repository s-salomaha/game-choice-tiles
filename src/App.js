import React from 'react';
import {State} from './context/State';
import {Navbar} from './components/Navbar';
import {Game} from './components/Game';
import {browserName} from 'react-device-detect';

function App() {
	return (
		<State>
			<div className={`App ${browserName}`}>
				<Navbar/>
				<div className="container">
					<h1 className="my-5">Game "Choice tiles"</h1>
					<Game/>
					<div className="my-5">
						<h2 className="mb-4">Rules of the game.</h2>
						<p>The page consists of a board of tiles (default 4x4).</p>
						<ul>
							<li>every 2 tiles have the same color;</li>
							<li>each tile is closed, so the user can not see a color.</li>
						</ul>
						<p>The gameplay is the sequence of rounds. In each round the user should select 2 tiles with the same color to make them disappear. If he selects 2 tiles with different colors then they are flipped to "closed" state, and the user proceeds with the next round. The game is considered to be over when all of the tiles are opened.</p>
						<p>Application developed using ReactJS + useReducer hook.</p>
					</div>
				</div>
			</div>
		</State>
	);
}

export default App;
