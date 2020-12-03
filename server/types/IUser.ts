export interface IUser {
  _id?: string;
  email?: string;
  password?: string;

  facebook?: {
    id: string;
    token: string;
    name: string;
    email: string;
  };

  instagram?: {
    id: string;
    token: string;
    name: string;
    email: string;
  };
}
