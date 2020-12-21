import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "transaksi.index",
    component: () => import("../views/transaksi/index.vue"),
  },
  {
    path: "/edit/:id",
    name: "transaksi.edit",
    component: () => import("../views/transaksi/edit.vue"),
  },
  {
    path: "/create",
    name: "transaksi.create",
    component: () => import("../views/transaksi/create.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
