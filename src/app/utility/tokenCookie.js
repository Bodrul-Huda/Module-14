import { CreateToken } from "./JWTHelper";

export async function TokenCookie() {
  let token = await CreateToken();

  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure:HttpOnly; Path=/; SameSite=Strict`,
  };
}
