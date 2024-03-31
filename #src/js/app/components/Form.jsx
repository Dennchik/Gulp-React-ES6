import React, { useState } from 'react';
import axios from 'axios';
import "../../../scss/app/form.scss";

export default () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});
	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xwkgvnjl',
			data: inputs,
		}).then((response) => {
			handleServerResponse(
				true,
				'Thank you, your message has been submitted.',
			);
		}).catch((error) => {
			handleServerResponse(false, error.response.data.error);
		});
	};
	return (
		<div className='form'>
			<h1 className="form__title">React and Formspree</h1>
			<hr />
			<form id='fs-frm' className='form' onSubmit={handleOnSubmit}>
				<label className="form__email" htmlFor="email" >Email</label>
				<input
					id="email"
					type="email"
					name="_replyto"
					onChange={handleOnChange}
					required
					value={inputs.email}
				/>
				<label className="form__message" htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					onChange={handleOnChange}
					required
					value={inputs.message}
				/>
				<button className="form__button" type="submit" disabled={status.submitting}>
					<span>
						{!status.submitting
							? !status.submitted
								? 'Submit'
								: 'Submitted'
							: 'Submitting...'}</span>
				</button>
			</form>
			{status.info.error && (
				<div className="error">Error: {status.info.msg}</div>
			)}
			{!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
		</div>
	);
};