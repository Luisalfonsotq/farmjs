import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: App.vue,
      children: [
        {
          path: "",
          name: "MainLayout",
          component: () => import("@/layout/MainLayout.vue"),
          children:[
            {
              path: '',
              component : () =>import("@/views/MixHome.vue")
            },
           {path:'/about',
            component: () => import("@/views/AboutView.vue")
           }
          ]
        },
      ],
    },
  ],
});

export default router;
