import type { Router } from "vue-router";

const createRouteGuard = (router: Router) => {
  router.beforeEach((_to, _form, next) => {
    next();
  });
};

export default createRouteGuard;
