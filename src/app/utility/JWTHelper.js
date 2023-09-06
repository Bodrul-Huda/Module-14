import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.JWT_KEY);

  //Encoding token

  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRY)
    .sign(secret);
  return token;
}

//Decoding token

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_KEY);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
