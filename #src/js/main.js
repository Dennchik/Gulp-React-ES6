
// // import Swiper from 'swiper'; 
// // import anime from 'animejs/lib/anime.es.js';
// // import Parallax from 'parallax-js';
// import Rellax from 'rellax';
// // import Rellax from "./module/rellax";
// // Rellax();

// // var rellax = new Rellax('.rellax');
// // console.log(rellax);
// // var rellax = new Rellax('.rellax', {
// // 	breakpoints: [576, 768, 1201],
// // }); 

// // var rellax = new Rellax('.rellax', {
// // 	// center: true
// // 	callback: function (position) {
// // 		// callback every position change
// // 		console.log(position);
// // 	}
// // });

// // -----------------------------------------------------------------------------

// function animItems() {
// 	const animItems = document.querySelectorAll('._rellax');
// 	const rellaxWrapper = document.querySelector('._rellax-wrapper');
// 	if (animItems.length > 0) {
// 		function startHieght() {
// 			const lastElement = Object.values(animItems).pop();
// 			const contenBlockHeight = rellaxWrapper.offsetHeight;
// 			rellaxWrapper.style.height = contenBlockHeight;
// 			let lastHeight = lastElement.offsetHeight;

// 			function gettHieght() {
// 				const rellaxWrapperTop = offsets(rellaxWrapper).top;
// 				const lastElementTop = offsets(lastElement).top;

// 				rellaxWrapper.style.height = lastElementTop - rellaxWrapperTop + lastHeight + 'px';
// 			}
// 			return gettHieght;
// 		}

// 		let _startHieght = startHieght();

// 		let animeRellax = new Rellax('._rellax', {
// 		});
// 		animeRellax.refresh();




// 		window.addEventListener('scroll', function () {
// 			_startHieght();
// 		});

// 		function offsets(el) {
// 			const rect = el.getBoundingClientRect(),
// 				scrollLeft = window.scrollX || document.documentElement.scrollLeft,
// 				scrollTop = window.scrollY || document.documentElement.scrollTop;
// 			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
// 		}
// 	}
// }
// animItems();

// //* ----------------------------------------------------------------------------
// console.log("%c РОССИЯ ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");
// //* ----------------------------------------------------------------------------
// // const obj = { one: 1, two: 2, three: 3 };

// // const lastKey = Object.keys(obj).pop();
// // console.log(lastKey); // 👉️ three

// // const lastValue = Object.values(obj).pop();
// // console.log(lastValue); // 👉️ 3


// window.addEventListener('mousedown', function (e) {
// 	document.body.classList.add('mouse-navigation');
// 	document.body.classList.remove('kbd-navigation');
// });
// window.addEventListener('keydown', function (e) {
// 	if (e.keyCode === 9) {
// 		document.body.classList.add('kbd-navigation');
// 		document.body.classList.remove('mouse-navigation');
// 	}
// });
// window.addEventListener('click', function (e) {
// 	if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
// 		e.preventDefault();
// 	}
// });
// window.onerror = function (message, source, line, col, error) {
// 	var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
// 	errors.textContent += text + '\n';
// 	errors.style.display = '';
// };
// console.error = (function (old) {
// 	return function error() {
// 		errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
// 		errors.style.display = '';
// 		old.apply(this, arguments);
// 	};
// })(console.error);



