import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { TokenCookie } from "@/app/utility/tokenCookie";

export async function POST(req, res) {
  const JsonBody = await req.json();
  let email = JsonBody["email"];
  let password = JsonBody["password"];

  //Authorization checking

  if (email == "email@email.com" && password == "123") {
    let Cookie = await TokenCookie(email);
    return NextResponse.json(
      { status: true, message: "Request completed" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "Request Fail" });
  }
}

// Delete cookie

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({ status: true, message: "Request Completed" });
}
