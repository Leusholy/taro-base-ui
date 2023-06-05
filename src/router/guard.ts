import type { Router } from "vue-router";
import { getStorageData } from "@/utils/storage";
import { ACCESS_TOKEN } from "@/store/mutation-types";

const createRouteGuard = (router: Router) => {
  router.beforeEach(async (to, _form, next) => {
    const token = await getStorageData(ACCESS_TOKEN);
    if (token) {
      next();
    } else {
      const { auth } = to.meta;
      if (auth) next("/login");
      else next();
    }
  });
};

export default createRouteGuard;
