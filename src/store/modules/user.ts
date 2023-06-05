import { defineStore } from "pinia";
import { login } from "@/api/user";
import type { LoginData } from "@/api/user";
import { setStorageData } from "@/utils/storage";
import { ACCESS_TOKEN } from "@/store/mutation-types";

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
      await setStorageData(ACCESS_TOKEN, res.data.token);
    },
  },
});
