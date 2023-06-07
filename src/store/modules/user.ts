import { defineStore } from "pinia";
import { login } from "@/api/user";
import { setStorageData } from "@/utils/storage";
import { ACCESS_TOKEN } from "@/store/mutation-types";

export const useUserStore = defineStore("user", {
  state: () => ({}),
  actions: {
    userLogin() {
      return new Promise(async (resolve, reject) => {
        try {
          const params = { username: "admin", password: "admin" };
          const { data: res } = await login(params);
          await setStorageData(ACCESS_TOKEN, res.token);
          resolve(res);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
});
