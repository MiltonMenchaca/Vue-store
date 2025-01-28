<template>
  <div class="container mx-auto px-6">
    <div v-if="productos.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ItemProduct v-for="producto in productos" :key="producto.id" :product="producto" />
    </div>
    <div v-else class="text-center text-gray-600 text-lg mt-6">
      <p>No hay productos disponibles en este momento.</p>
    </div>
  </div>
</template>

<script>
import ItemProduct from "./ItemProduct.vue";

export default {
  components: { ItemProduct },
  data() {
    return {
      productos: [
        { id: 1, nombre: "Producto 1", precio: 100, imagen: "https://via.placeholder.com/150" },
        { id: 2, nombre: "Producto 2", precio: 200, imagen: "https://via.placeholder.com/150" },
        { id: 3, nombre: "Producto 3", precio: 300, imagen: "https://via.placeholder.com/150" }
      ],
    };
  }
};
</script>
