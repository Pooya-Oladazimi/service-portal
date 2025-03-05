'use server'

import { NewIncubatorForm } from "./types";
import { sendEmail } from "../libs/email";
import { ActionResponse } from "./types";



export async function sendIncubatorRequest(formData: NewIncubatorForm): Promise<ActionResponse> {
	let title = formData.title;
	let desc = formData.description;
	let logo = formData.logo;
	let email = formData.email;

	if (!title || !desc || !logo || !email) {

		return { status: false, content: "mandatory fields are missing" };
	}

	let result = await sendEmail({ subject: title, html: desc, file: logo, senderEmail: email });

	if (result) {
		return { status: true, content: "sent" };
	}
	return { status: false, content: "something went wrong" };


}
