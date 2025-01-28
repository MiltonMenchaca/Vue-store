<template>
  <div id="app">
    <nav class="bg-green-500 p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Mi Tienda</h1>
        <div class="space-x-6">
          <router-link 
            to="/" 
            class="text-white text-lg px-3 py-2 hover:text-gray-200 transition border-b-2 border-transparent hover:border-white"
            :class="{ 'border-white': $route.path === '/' }"
          >
            Inicio
          </router-link>
          <router-link 
            to="/productos" 
            class="text-white text-lg px-3 py-2 hover:text-gray-200 transition border-b-2 border-transparent hover:border-white"
            :class="{ 'border-white': $route.path === '/productos' }"
          >
            Productos
          </router-link>
        </div>
      </div>
    </nav>
    <div class="p-6">
      <router-view />
    </div>
  </div>
</template>
