'use server'

import { NewIncubatorForm } from "./types";
import { sendEmail } from "@/app/libs/email";
import { ActionResponse } from "./types";
import { captchaIsValid } from "@/app/libs/captcha";



export async function sendIncubatorRequest(formData: NewIncubatorForm): Promise<ActionResponse> {
	try {
		let title = formData.title;
		let desc = formData.description;
		let logo = formData.logo;
		let email = formData.email;
		let captcha = formData.captcha;

		let fileIsAttached = logo && logo.size !== 0;

		const acceptableMimeTypes = ["image/png", "image/jpeg", "image/svg+xml"]
		//@ts-ignore
		if (fileIsAttached && !acceptableMimeTypes.includes(logo.type)) {
			return { status: false, content: "file type is not accepted" };
		}

		if (!title || !desc || !email || !await captchaIsValid(captcha)) {
			return { status: false, content: "mandatory fields are missing" };
		}

		let result = await sendEmail({ subject: title, html: desc, file: (fileIsAttached ? logo : undefined), senderEmail: email });

		if (result) {
			return { status: true, content: "sent" };
		}
		return { status: false, content: "something went wrong" };
	} catch {

		return { status: false, content: "something went wrong" };
	}
}
