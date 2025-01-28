export default {
    state: {
      productos: []
    },
    mutations: {
      setProductos(state, productos) {
        state.productos = productos;
      }
    },
    actions: {
      fetchProductos({ commit }) {
        // Aquí podrías hacer una petición HTTP
        const productos = [
          { id: 1, nombre: "Producto 1", precio: 100 },
          { id: 2, nombre: "Producto 2", precio: 200 }
        ];
        commit("setProductos", productos);
      }
    }
  };
  