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

export function getUserData(): User[] {
    return data.users.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        handle: user.handle,
        role: user.role === "admin" || user.role === "user" ? user.role : "user",
        picture: user.picture,
    }));
}