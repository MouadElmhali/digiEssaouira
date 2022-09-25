import { IRouteRecord } from "./../types/route";

export const routes: IRouteRecord = Object.freeze({
  home: Object.freeze({
    name: "home",
    path: "/",
  }),
  courses: Object.freeze({
    name: "courses",
    path: "/courses",
  }),
  candidates: Object.freeze({
    name: "candidates",
    path: "/candidates",
  }),
  about: Object.freeze({
    name: "about",
    path: "/about",
  }),
});
