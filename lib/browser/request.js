/* global window */
import URL from "url-parse";

export function resolveUrl(origin, link) {
  return new URL(link, origin).toString();
}
