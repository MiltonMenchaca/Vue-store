<template>
  <div id="app">
    <!-- Barra de navegación -->
    <nav class="p-4 bg-green-500 shadow-md">
      <div class="container flex items-center justify-between mx-auto">
        <h1 class="text-2xl font-bold text-white">Mi Tienda</h1>
        
        <div class="space-x-6">
          <router-link
            to="/"
            class="px-3 py-2 text-lg text-white transition border-b-2 border-transparent hover:text-gray-200 hover:border-white"
            :class="{ 'border-white': $route.path === '/' }"
          >
            Inicio
          </router-link>
          
          <router-link
            to="/productos"
            class="px-3 py-2 text-lg text-white transition border-b-2 border-transparent hover:text-gray-200 hover:border-white"
            :class="{ 'border-white': $route.path === '/productos' }"
          >
            Productos
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Contenido principal -->
    <div class="p-6">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Aquí puedes colocar estilos globales o específicos para App.vue */
</style>
