import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../scss/app/ScrollAccordion.scss';

export default function App() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		ScrollSmoother.create({
			content: '#content',
			wrapper: '.wrapper',
			smooth: true,
			effects: true,
			normalizeScroll: true
		});
		// Создаем таймлайн GSAP
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.accordions',
				pin: true,
				start: 'top top',
				end: 'bottom top',
				scrub: 1,
				ease: 'linear',
			}
		});

		// Добавляем анимацию к элементам
		tl.to('.accordions__item .accordions__text', {
			height: 0,
			paddingBottom: 0,
			opacity: 0,
			stagger: .5,
		});
		tl.to('.accordions__item', {
			marginBottom: -15,
			stagger: .5,
		}, '<');
	}, []);
};

