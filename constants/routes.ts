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
  electeds: Object.freeze({
    name: "electedsGroups",
    path: "/electeds-groups",
  }),
  about: Object.freeze({
    name: "about",
    path: "/about",
  }),
  branch: Object.freeze({
    name: "branch",
    path: "/electeds-groups/branch",
  }),
});
