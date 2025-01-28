<template>
    <div class="bg-white p-4 shadow-lg rounded-lg border transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img :src="product.imagen" alt="Imagen del Producto" class="w-full h-40 object-cover rounded-md mb-4">
      <h2 class="text-xl font-semibold text-gray-700">{{ product.nombre }}</h2>
      <p class="text-gray-500 text-lg">Precio: <span class="text-green-600 font-bold">${{ product.precio }}</span></p>
      <button 
        class="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105"
      >
        🛒 Comprar
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    }
  };
  </script>
  