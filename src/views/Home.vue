<template>
    <div class="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Store_font_awesome.svg" alt="Tienda" class="w-40 h-40 mb-6 animate-fade-in">
        <h1 class="mb-4 text-5xl font-bold text-blue-600">Bienvenido a Nuestra Tienda</h1>
      <p class="max-w-2xl mb-6 text-xl text-gray-700">
        Explora nuestra selección de productos de alta calidad. Encuentra lo que necesitas al mejor precio.
      </p>
      <router-link 
        to="/productos" 
        class="px-8 py-3 text-white transition transform bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105"
      >
        🛒 Ver Productos
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style>
  /* Agregar animación de entrada */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  </style>
  