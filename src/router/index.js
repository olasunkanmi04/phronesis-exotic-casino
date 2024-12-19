import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/deposit",
      name: "deposit",
      component: () => import("../views/Deposit.vue"),
    },
    {
      path: "/strategy",
      name: "strategy",
      component: () => import("../views/Strategy.vue"),
    },
    {
      path: "/payout",
      name: "payout",
      component: () => import("../views/Payout.vue"),
    },
    {
      path: "/debriefs",
      name: "debriefs",
      component: () => import("../views/Debriefs.vue"),
    },
  ],
});

export default router;
