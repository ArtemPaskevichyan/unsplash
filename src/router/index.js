import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "./AuthRoutes";
import BaseRoutes from "./BaseRoutes";

const routes = [...AuthRoutes, ...BaseRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
