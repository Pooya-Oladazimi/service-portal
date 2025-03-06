export type ActionResponse = {
	status: boolean,
	content: any
}

export type ContactForm = {
	title: string,
	content: string,
	email: string,
	captcha: string
}

export type NewIncubatorForm = {
	title: string,
	description: string,
	email: string,
	logo: File,
	captcha: string

}
