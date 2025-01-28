<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <h1 class="text-4xl font-bold text-gray-800 text-center mb-2">🛍️ Nuestros Productos</h1>
      <p class="text-center text-gray-600 mb-6">
        Encuentra los mejores productos a los mejores precios. Calidad garantizada.
      </p>
      <hr class="w-1/3 mx-auto border-t-2 border-gray-300 mb-6">
      
      <div class="container mx-auto">
        <ListaProductos />
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
  