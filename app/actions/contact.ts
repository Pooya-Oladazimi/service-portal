'use server';

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


export async function sendContactForm(formData: FormData) {
	let title = formData.get('title') as string;
	let content = formData.get('content') as string;

	if (!title || !content) {
		return;
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
		console.error('Something Went Wrong', error);
		return;
	}
	const info = await transporter.sendMail({
		from: process.env.SERVICE_EMAIL,
		to: process.env.CONTACT_RECV_EMAIL,
		subject: title,
		//text: content,
		html: content,
	});
	console.log(info);

}
