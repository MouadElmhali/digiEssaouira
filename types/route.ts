export interface IRoute {
  name: string;
  path: string;
}

export type IRouteRecord = Record<IRoute["name"], IRoute>;
