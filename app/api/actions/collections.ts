'use server'

import { ActionResponse, Collection } from "./types";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export async function getUserCollectionList(): Promise<ActionResponse> {
	try {
		let session = await getServerSession(authOptions);
		if (!session?.user?.token) {
			return { status: false, content: "action not allowed" }
		}
		let resp = await fetch((process.env.GATEWAY_BASE_URL! as string) + "/users/collections/", {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${session.user.token}`
			}
		});
		if (!resp.ok) {
			return { status: false, content: "request failed" }
		}
		let res: Collection[] = await resp.json();
		return { status: true, content: res }

	} catch {
		return { status: false, content: "something went wrong" }
	}
}


export async function createCollection(formData: Collection): Promise<ActionResponse> {
	try {
		let session = await getServerSession(authOptions);
		if (!session?.user?.token) {
			return { status: false, content: "action not allowed" }
		}

		if (!formData.label || !formData.description || !formData.terminologies || formData.terminologies.length === 0) {
			return { status: false, content: "mandatory fields are missing" };
		}

		let resp = await fetch((process.env.GATEWAY_BASE_URL! as string) + "/users/collections/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${session.user.token}`
			},
			body: JSON.stringify(formData)
		});

		if (!resp.ok) {
			return { status: false, content: "request failed" }
		}
		let res: Collection = await resp.json();
		return { status: true, content: res }

	} catch {
		return { status: false, content: "something went wrong" }
	}
}


export async function deleteCollection(collectionId: string): Promise<ActionResponse> {
	try {
		let session = await getServerSession(authOptions);
		if (!session?.user?.token) {
			return { status: false, content: "action not allowed" }
		}
		if (!collectionId) {
			return { status: false, content: "mandatory fields are missing" };
		}

		let resp = await fetch((process.env.GATEWAY_BASE_URL! as string) + "/users/collections/" + collectionId, {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${session.user.token}`
			}
		});
		if (!resp.ok) {
			return { status: false, content: "request failed" }
		}
		return { status: true, content: "deleted" }


	} catch {
		return { status: false, content: "something went wrong" }
	}
}
