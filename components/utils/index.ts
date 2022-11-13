import { decode } from "jsonwebtoken";

export function getCurrentUser() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    return decode(JSON.parse(localStorage.getItem("user")));
  }
}

export function logOut() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    localStorage.removeItem("user");
  }
}
