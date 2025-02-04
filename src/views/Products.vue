<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <h1 class="mb-2 text-4xl font-bold text-center text-gray-800">🛍️ Nuestros Productos</h1>
    <p class="mb-6 text-center text-gray-600">
      Encuentra los mejores productos a los mejores precios. Calidad garantizada.
    </p>
    <hr class="w-1/3 mx-auto mb-6 border-t-2 border-gray-300">
    
    <div class="container mx-auto">
      <!-- Componente que muestra la lista de productos -->
      <ListaProductos />

      <!-- Botón para acceder al CRUD -->
      <div class="mt-6 text-center">
        <router-link
          to="/crud"
          class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Administrar Productos (CRUD)
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProductos from "@/components/Product/ListaProductos.vue";

export default {
  name: "ProductListPage",
  components: {
    ListaProductos
  }
};
</script>

<style scoped>

</style>
