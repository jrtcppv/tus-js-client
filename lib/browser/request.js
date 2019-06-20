/* global window */
import URL from "url-parse";

export function newRequest() {
  if (typeof window === "undefined") {
    return XMLHttpRequest();
  }
  return new window.XMLHttpRequest();
}

export function resolveUrl(origin, link) {
  return new URL(link, origin).toString();
}
