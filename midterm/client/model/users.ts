import data from "../data/users.json";

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  role: "admin" | "user",
  picture: string
  token?: string,
}

export function getUsers(): User[] {
    return data.users.map( x => ({ ...x, role: x.id <= 5 ? 'admin' : 'user', password: '' }) ) 
}

export function getUserByEmail(email: string): User | undefined {
    return getUsers().find( x => x.email === email );
}
