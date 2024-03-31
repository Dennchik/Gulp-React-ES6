import React, { useEffect } from "react";
import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import { gsap } from "gsap";

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
		})
			.setPin(tween) // устанавливаем анимацию
			.addTo(controller); // добавляем сцену к контроллеру
	}, []);

	return (
		<div>
			<div className="trigger">Триггер</div>
			<div className="slow-block">Блок с медленным движением</div>
			<div style={{ height: "1000px" }}>Дополнительное пространство для прокрутки</div>
		</div>
	);
};
export default SlowScrollComponent;
