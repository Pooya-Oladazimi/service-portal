import { DefaultSession, DefaultUser } from "next-auth";

declare module 'next-auth' {
	interface Session {
		user: {
			token?: string,
			username?: string
		} & DefaultSession['user'];
	}

	interface User extends DefaultUser {
		token?: string,
		username?: string
	}
}
