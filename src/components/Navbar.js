import React from 'react';

export const Navbar = () => (
	<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
		<div className="container">
			<div className="navbar-brand text-uppercase">
				Game "Choice tiles"
			</div>

			<ul className="navbar-nav">
				<li className="nav-item">
				<a
					className="nav-link"
					href="https://github.com/s-salomaha/game-choice-tiles"
					target="_blank"
					rel="noreferrer"
				>
					Github repository
				</a>
				</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="https://career.habr.com/s-salomaha"
							target="_blank"
							rel="noreferrer"
						>
							Habrcareer/s-salomaha
						</a>
					</li>
			</ul>
		</div>
	</nav>
);
