import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

const SlowScrollComponent = () => {
	useEffect(() => {
		// Создаем новый экземпляр контроллера ScrollMagic
		const controller = new ScrollMagic.Controller();

		// Создаем анимацию с использованием GSAP
		const tween = gsap.to(".slow-block", {
			y: 200, // насколько сдвинуть блок при прокрутке
			ease: "none", // без эффекта замедления
		});

		// Создаем новую сцену ScrollMagic
		new ScrollMagic.Scene({
			triggerElement: ".trigger", // элемент, который инициирует анимацию
			duration: 500, // длительность анимации в px
		});
		// .setTween(tween) // устанавливаем анимацию
		// .addTo(controller); // добавляем сцену к контроллеру
	}, []);

	return (
		<div>
			{/* <div className="trigger">Триггер</div>
			<div className="slow-block">Блок с медленным движением</div>
			<div style={{ height: "1000px" }}>
				Дополнительное пространство для прокрутки
			</div> */}
			<div id="wrapper">
				<div id="content">
					<div class="spacer trigger"></div>
					<div class="accordions">
						<div class="accordion">
							<div class="title">
								All-screen design.
							</div>
							<div class="text">
								Lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.1
							</div>
						</div>
						<div class="accordion slow-block">
							<div class="title"> Beauty all around.</div>
							<div class="text">
								The breakthrough M1 chip is now in Air. An 8-core CPU delivers up to 60 percent faster performance than the previous generation, making Air a creative and mobile gaming powerhouse. Multitask smoothly between powerful apps and play graphics-intensive games. And with M1, you can go even further with your creativity with apps like SketchUp.
							</div>
						</div>
						<div class="accordion">
							<div class="title">Take Center Stage.</div>
							<div class="text">
								The 12MP Ultra Wide front camera enables Center Stage, making video calls more natural and content creation more fun. As you move around, the camera automatically pans to keep you centered in the shot. When others join or leave the frame, the view expands or zooms in.
							</div>
						</div>
						<div class="accordion">
							<div class="title">Pretty everywhere.</div>
							<div class="text">Join superfast 5G wireless networks when you’re on the go. Download files, play multiplayer games, stream movies, check in with friends, and more.</div>
						</div>
					</div>
					<div class="spacer"></div>
				</div>
			</div>
		</div>
	);
};

export default SlowScrollComponent;
