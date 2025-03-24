import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export { default } from "next-auth/middleware"

export const config = { matcher: ["/collection/"] }


export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(request.url, request.nextUrl.origin))
}

