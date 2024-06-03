import Cookies from "js-cookie";

export function getFromCookie(name: string) {
  const data = Cookies.get(name);
  return data || null;
}
