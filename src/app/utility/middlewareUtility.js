import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function cookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);
    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
