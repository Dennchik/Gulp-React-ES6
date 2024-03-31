import React, { useState, useEffect, } from "react";

export default function ScrollAccordion() {
	let [windowHeightState, setWindowHeightState] = useState(window.innerHeight);
	useEffect(() => {
		const handleResize = () => {
			const newWindowHeight = window.innerHeight;
			setWindowHeightState(newWindowHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div className="content__spacer pinned-trigger-1">
				<div>
					<p>Высота окна браузера: {windowHeightState}px</p>
				</div>
			</div>
			<div className="accordions">
				<div className="accordions__item slow-block-1 pinned-trigger-2">
					<div className="accordions__title">
						All-screen design.
					</div>
					<div className="accordions__text">
						Lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.1
					</div>
				</div>
				<div className="accordions__item slow-block-2 pinned-trigger-3">
					<div className="accordions__title"> Beauty all around.</div>
					<div className="accordions__text">
						The breakthrough M1 chip is now in Air. An 8-core CPU delivers up to 60 percent faster performance than the previous generation, making Air a creative and mobile gaming powerhouse. Multitask smoothly between powerful apps and play graphics-intensive games. And with M1, you can go even further with your creativity with apps like SketchUp.
					</div>
				</div>
				<div className="accordions__item slow-block-3 pinned-trigger-4 sticky-element">
					<div className="accordions__title">Take Center Stage.</div>
					<div className="accordions__text">
						The 12MP Ultra Wide front camera enables Center Stage, making video calls more natural and content creation more fun. As you move around, the camera automatically pans to keep you centered in the shot. When others join or leave the frame, the view expands or zooms in.
					</div>
				</div>
				<div className="accordions__item">
					<div className="accordions__title">Pretty everywhere.</div>
					<div className="accordions__text">Join superfast 5G wireless networks when you’re on the go. Download files, play multiplayer games, stream movies, check in with friends, and more.</div>
				</div>
			</div>
			<div className="content__spacer"></div>
		</>
	);
};

