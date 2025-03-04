'use server';

import { ActionResponse, ContactForm } from './types';
import { sendEmail } from '../libs/email';


export async function sendContactForm(formData: ContactForm): Promise<ActionResponse> {
	let title = formData.title;
	let content = formData.content;
	let email = formData.email;

	if (!title || !content || !email) {
		return { status: false, content: "Mandatory fields are missing" };
	}

	let result = await sendEmail({ subject: title, html: content, senderEmail: email });
	if (result) {
		return { status: true, content: "sent" };
	}
	return { status: false, content: "something went wrong" };
}
