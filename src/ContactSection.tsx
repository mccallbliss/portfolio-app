import React, { useState } from 'react';
import './ContactSection.scss';
import SectionTitle from './SectionTitle';
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_C6Hr2IBJCk3JA3fpRmETR");

export default function ContactSection() {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

	const submit = () => {
	    if (name && email && message) {
            const serviceId = 'service_4z55ger';
            const templateId = 'template_c05t82c';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));

	        setName('');
	        setEmail('');
	        setMessage('');
	        setEmailSent(true);
	    } else {
	        alert('Please fill in all fields.');
	    }
	}

	return (
		<div className="contact-section section-component">
			<SectionTitle title={'Contact'}/>
			<div className="contact-form">
		        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
		        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
		        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
		        <button className="button-boxed" onClick={submit}>Submit</button>
		        <span className={ emailSent ? 'visible' : 'hidden' }>
		        	Thanks for reaching out! Will be in touch asap.
	        	</span>
			</div>
		</div>
	);
}