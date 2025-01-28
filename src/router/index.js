import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ProductListPage from "../views/Products.vue";
import NotFoundPage from "../views/NotFound.vue"; // Página para rutas no encontradas

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: { title: "Inicio - Mi Tienda" },
  },
  {
    path: "/productos",
    component: ProductListPage,
    meta: { title: "Productos - Mi Tienda" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    meta: { title: "404 - Página no encontrada" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Cambiar el título de la página dinámicamente
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mi Tienda"; // Si no hay título, usa un default
  next();
});

export default router;
