'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";


export async function getUserToken(): Promise<string> {
  try {
    let session = await getServerSession(authOptions);
    if (!session?.user?.token) {
      return "";
    }
    return session.user.token;
  } catch {
    return "";
  }
}
