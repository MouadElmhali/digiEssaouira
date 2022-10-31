export interface IRoute {
  name: string;
  path?: string;
  makePath?: (args: any) => string;
}

export type IRouteRecord = Record<IRoute["name"], IRoute>;
