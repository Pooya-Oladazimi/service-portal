'use server';

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


export async function sendContactForm(formData: FormData) {
	let title = formData.get('title') as string;
	let content = formData.get('content') as string;

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
		from: "brad@sandboxbccd49a83c3742bcb00d487d6018d9ea.mailgun.org",
		to: "pooya.oladazimi@gmail.com",
		subject: title,
		text: content,
		//html: html ? html : '',
	});
	console.log(info);

}
