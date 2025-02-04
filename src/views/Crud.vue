<template>
  <div class="p-4">
    <h1 class="mb-4 text-2xl font-bold">CRUD con Vue.js y LocalStorage</h1>
    
    <!-- Formulario para Crear/Actualizar elemento -->
    <form @submit.prevent="createOrUpdateItem" class="flex items-end gap-4 mb-6">
      <div>
        <label class="block font-semibold">Nombre:</label>
        <input
          class="px-2 py-1 border rounded"
          type="text"
          v-model="newItem.name"
          placeholder="Nombre del producto"
          required
        />
      </div>
      <div>
        <label class="block font-semibold">Precio:</label>
        <input
          class="px-2 py-1 border rounded"
          type="number"
          v-model="newItem.price"
          placeholder="Precio"
          min="0"
          required
        />
      </div>

      <button
        class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        type="submit"
      >
        {{ isEditing ? 'Actualizar' : 'Crear' }} 
      </button>
    </form>

    <!-- Tabla para Listar elementos -->
    <table class="w-full border border-collapse border-gray-300 table-auto">
      <thead>
        <tr class="bg-gray-100">
          <th class="p-2 border">Nombre</th>
          <th class="p-2 border">Precio</th>
          <th class="p-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="hover:bg-gray-50"
        >
          <td class="p-2 border">{{ item.name }}</td>
          <td class="p-2 border">{{ item.price }}</td>
          <td class="p-2 text-center border">
            <button
              class="px-2 py-1 mr-2 bg-yellow-400 rounded hover:bg-yellow-500"
              @click="editItem(index)"
            >
              Editar
            </button>
            <button
              class="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              @click="deleteItem(index)"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Crud",
  data() {
    return {
      items: [],
      newItem: {
        name: "",
        price: 0,
      },
      isEditing: false,
      currentIndex: null,
    };
  },
  created() {
    // Al montar el componente, cargamos los datos desde el localStorage
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  },
  methods: {
    // Guardar cambios en localStorage
    saveToLocalStorage() {
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    // Crear o Actualizar un elemento
    createOrUpdateItem() {
      if (this.isEditing && this.currentIndex !== null) {
        // Si estamos editando, actualizamos el ítem
        this.items[this.currentIndex] = { ...this.newItem };
        this.isEditing = false;
        this.currentIndex = null;
      } else {
        // Si no, creamos uno nuevo
        this.items.push({ ...this.newItem });
      }

      // Guardamos en localStorage
      this.saveToLocalStorage();
      // Limpiamos el formulario
      this.resetForm();
    },
    // Rellenar el formulario con el item seleccionado para editar
    editItem(index) {
      this.newItem = { ...this.items[index] };
      this.isEditing = true;
      this.currentIndex = index;
    },
    // Eliminar elemento de la lista
    deleteItem(index) {
      this.items.splice(index, 1);
      this.saveToLocalStorage();
    },
    // Volver el formulario a su estado inicial
    resetForm() {
      this.newItem = {
        name: "",
        price: 0,
      };
    },
  },
};
</script>

<style scoped>
</style>
