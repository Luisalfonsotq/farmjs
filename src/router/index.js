import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "NavBarLayout",
          component: () => import("@/layout/layoutComponents/NavBarLayout.vue"),
        },
        {
          path: "",
          name: "FooterLayout",
          component: () => import("@/layout/layoutComponents/FooterLayout.vue"),
        },
      ],
    },
  ],
});

export default router;
