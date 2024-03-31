import React, { useState } from 'react';
import '../../scss/app/counter.scss';
// -----------------------------------------------------------------------------

function MyButton({ count, onClick }) {

	// const btnClick = useContext('.btn-click')
	// btnClick.addEventListener
	return (
		<button className='btn-click _btn' onClick={onClick}>
			Cliccked
			<span>
				{count}
			</span>
			time
		</button>
	);
}
export default () => {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div className='button'>
			<h1>Counters that update separately</h1>
			<MyButton count={count} onClick={handleClick} />
			{/* <MyButton count={count} onClick={handleClick} /> */}
		</div>
	);
};