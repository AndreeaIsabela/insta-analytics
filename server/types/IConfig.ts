export interface IConfig {
  port: number;

  api: {
    prefix: string;
  };

  facebook: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    profileFields: string[];
  };

  instagram: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
  };

  loggerFormat: string;
}
