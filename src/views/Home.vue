<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Store_font_awesome.svg" alt="Tienda" class="w-40 h-40 mb-6 animate-fade-in">
        <h1 class="text-5xl font-bold text-blue-600 mb-4">Bienvenido a Nuestra Tienda</h1>
      <p class="text-xl text-gray-700 mb-6 max-w-2xl">
        Explora nuestra selección de productos de alta calidad. Encuentra lo que necesitas al mejor precio.
      </p>
      <router-link 
        to="/productos" 
        class="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
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
  