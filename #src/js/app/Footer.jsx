import React from "react";
import "../../scss/app/footer.scss";

export default function Header() {
	return (
		<div className="footer__body">
			<div className="footer_container">
				<div className="footer_container__contant">

					<p>Подвал <code>&copy; 2016</code></p>
					<a href="http://">View Source (◕‿◕)
						SYMBL </a>
					<i className="fa-solid fa-bell"></i>
				</div>
			</div>
		</div >

	);
};