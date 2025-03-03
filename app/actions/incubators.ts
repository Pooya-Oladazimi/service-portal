'use server'

import { NewIncubatorForm } from "./types";
import { sendEmail } from "../libs/email";
import { ActionResponse } from "./types";



export async function sendIncubatorRequest(formData: NewIncubatorForm): Promise<ActionResponse> {
	let title = formData.title;
	let desc = formData.description;
	let logo = formData.file;
	let email = formData.email;

	let result = await sendEmail({ subject: title, html: "" });

	if (result) {
		return { status: true, content: "sent" };
	}
	return { status: false, content: "something went wrong" };


}
