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
  course: Object.freeze({
    name: "quiz",
    makePath: (courseName: string) => `/courses/${courseName}/course`,
  }),
  quiz: Object.freeze({
    name: "quiz",
    makePath: (courseName: string) => `/courses/${courseName}/quiz`,
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
  associations: Object.freeze({
    name: "associations",
    path: "/associations",
  }),
  region: Object.freeze({
    name: "region",
    path: "/region",
  }),
  askQuestion: Object.freeze({
    name: "askQuestion",
    path: "/askQuestion",
  }),
  resources: Object.freeze({
    name: "resources",
    path: "/resources",
  }),
  contactUs: Object.freeze({
    name: "contactUs",
    path: "/contactUs",
  }),
});
