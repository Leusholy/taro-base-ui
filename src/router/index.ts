import { createRouter, createWebHistory } from "vue-router";
import type { RouterHistory, RouteRecordRaw } from "vue-router";
import createRouteGuard from "./guard";

const history: RouterHistory = createWebHistory();

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    name: "Tabs",
    path: "/tabs",
    component: () => import("../pages/tabs/index.vue"),
    children: [
      {
        name: "TabHome",
        path: "home",
        component: () => import("../pages/home/index.vue"),
      },
      {
        name: "TabUser",
        path: "user",
        component: () => import("../pages/user/index.vue"),
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../pages/login/index.vue"),
  },
];

const router = createRouter({ history, routes });
createRouteGuard(router);
export default router;
