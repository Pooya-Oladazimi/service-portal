'use server';

import { ActionResponse, ContactForm } from './types';
import { sendEmail } from '../libs/email';
import { captchaIsValid } from '../libs/captcha';


export async function sendContactForm(formData: ContactForm): Promise<ActionResponse> {
	try {
		let title = formData.title;
		let content = formData.content;
		let email = formData.email;
		let captcha = formData.captcha;

		if (!title || !content || !email || !await captchaIsValid(captcha)) {
			return { status: false, content: "Mandatory fields are missing" };
		}

		let result = await sendEmail({ subject: title, html: content, senderEmail: email });
		if (result) {
			return { status: true, content: "sent" };
		}
		return { status: false, content: "something went wrong" };
	} catch {
		return { status: false, content: "something went wrong" };
	}
}
