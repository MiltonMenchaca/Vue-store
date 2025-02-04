import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ProductListPage from "../views/Products.vue";
import CrudPage from "../views/Crud.vue"; 
import NotFoundPage from "../views/NotFound.vue"; 

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { title: "Inicio - Mi Tienda" },
  },
  {
    path: "/productos",
    name: "Productos",
    component: ProductListPage,
    meta: { title: "Productos - Mi Tienda" },
  },
  {
    path: "/crud",
    name: "Crud",
    component: CrudPage,
    meta: { title: "CRUD - Mi Tienda" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
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
  document.title = to.meta.title || "Mi Tienda"; 
  next();
});

export default router;
