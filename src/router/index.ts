import { createRouter, createWebHistory } from "vue-router";
import type { RouterHistory, RouteRecordRaw } from "vue-router";
import createRouteGuard from "./guard";

const history: RouterHistory = createWebHistory();

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "Home",
    path: "/home",
    component: () => import("../pages/home/index.vue"),
  },
  {
    name: "User",
    path: "/user",
    component: () => import("../pages/user/index.vue"),
  },
];

const router = createRouter({ history, routes });
createRouteGuard(router);
export default router;
