import React, {useContext} from 'react';
import {Board} from '../components/Board';
import {Context} from '../context/context';

export const Game = () => {
	const {
		win,
		round,
		matches,
		appReset
	} = useContext(Context);

	const progressBarPercent = Math.floor(matches / 8 * 100);

	return (
		<div className="game row">
			<div className="col-6">
				<Board/>
			</div>
			<div className="col-6">
				<div className="game__info">
					<h2 className="mb-4">Game info:</h2>
					<div>Round: <span className="text-primary">{round}</span></div>
					<div>Matches: <span className="text-primary">{matches}</span> from 8</div>
					<div className="progress mt-3">
						<div
							className="progress-bar"
							role="progressbar"
							style={{width: `${progressBarPercent}%`}}
							aria-valuenow={progressBarPercent}
						>
							{progressBarPercent}%
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary btn-lg mt-5"
						onClick={() => appReset()}
					>
						Start again
					</button>
					{win && <div
						className="alert alert-success mt-5"
						role="alert"
					>
						<h4 className="alert-heading">You win!</h4>
					</div>}
				</div>
			</div>
		</div>
	);
};
