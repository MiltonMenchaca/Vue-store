import HomePage from "../views/Home.vue";
import ProductListPage from "../views/Products.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/productos", component: ProductListPage },
];

export default routes;
