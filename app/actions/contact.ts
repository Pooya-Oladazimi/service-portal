'use server';

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ActionResponse, ContactForm } from './types';


export async function sendContactForm(formData: ContactForm): Promise<ActionResponse> {
	let title = formData.title;
	let content = formData.content;
	let email = formData.email;

	if (!title || !content || !email) {
		return { status: false, content: "Mandatory fields are missing" };
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST_NAME,
		port: process.env.SMTP_PORT,
		secure: false,
		auth: {
			user: process.env.SMTP_USERNAME,
			pass: process.env.SMTP_PASSWORD,
		},
	} as SMTPTransport.Options);


	try {
		const isVerified = await transporter.verify();
		console.log(isVerified)
	} catch (error) {
		return { status: false, content: "something went wrong" };
	}
	const info = await transporter.sendMail({
		from: process.env.SERVICE_EMAIL,
		to: process.env.CONTACT_RECV_EMAIL,
		subject: title,
		html: content,
	});
	if (info.accepted.length > 0) {
		return { status: true, content: "sent" }
	}

	return { status: false, content: "something went wrong" };
}
