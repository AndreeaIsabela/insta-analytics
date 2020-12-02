export interface IConfig {
  port: number;
  api: {
    prefix: string;
  };
  instagram: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
  };
  loggerFormat: string;
}
