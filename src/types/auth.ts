export type User = {
  id?: string | number;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  full_name?: string;
  name?: string;
  surname?: string;
  role?: string | { id?: number | string; name?: string };
  token?: string;
  access_token?: string;
  type_user?: number;
  avatar?: string | null;
  permissions?: string[];
};
