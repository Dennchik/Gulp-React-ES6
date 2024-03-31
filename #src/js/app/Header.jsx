import React from "react";
import "../../scss/app/header.scss";
export default function Header() {
	return (
		<div className="header__container">
			<div className="header__body">


				<p className="header__title">Edit <code>src/App.js</code> and save to reload.</p>
				<nav className="header__navbar">

					<ul className="header__list" >
						<div className="header__logo">
							<img src="./img/header/logo.svg" alt="logo" />
						</div>
						<li>
							<a href="#courses">Courses</a>
						</li>
						<li>
							<a href="#tutorials">Tutorials</a>
						</li>
						<li>
							<a href="#jobs">Jobs</a>
						</li>
						<li>
							<a href="#student">Student</a>
						</li>
					</ul>

					<div className="header__search">
						<button>
							<i class="icon-search"></i>
						</button>
						<input type="text" name="search" id="search" />
					</div>
				</nav>
			</div >
		</div >
	);
}