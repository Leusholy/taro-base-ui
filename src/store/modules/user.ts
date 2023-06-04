import { defineStore } from "pinia";
import { login } from "@/api/user";
import type { LoginData } from "@/api/user";

interface UserStateType {
  token: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserStateType => ({
    token: "",
  }),
  actions: {
    async userLogin(loginForm: LoginData) {
      const { data: res } = await login(loginForm);
      console.log(res);
    },
  },
});
