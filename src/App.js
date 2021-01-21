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
				</div>
			</div>
		</State>
	);
}

export default App;
