import { reactive } from "vue";
import { useRouter } from "vue-router"
import { type User, getUserByEmail } from "./users";

const session = reactive({
  user: null as User | null,
  redirectUrl: null as string | null,
})



export function getSession(){
  return session;
}

export function useLogin(){
  const router = useRouter();

  return {
    login(email: string): User | null {
      const user = getUserByEmail(email);
        router.push(session.redirectUrl || "/");
      return null;
    },
    logout(){
      session.user = null;
      router.push("/login");
    }
  }
}