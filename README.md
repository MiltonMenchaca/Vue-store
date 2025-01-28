# 🛍️ Tienda Online con Vue.js + Tailwind CSS

Este es un proyecto de una tienda en línea desarrollada con **Vue.js 3** y **Tailwind CSS**, donde los usuarios pueden explorar productos y simular compras.

## 📌 Características del Proyecto

✅ **Diseño moderno y responsivo** con Tailwind CSS.  
✅ **Sistema de navegación** entre la página de inicio y la sección de productos.  
✅ **Tarjetas de productos interactivas** con imágenes y botones dinámicos.  
✅ **Efectos animados** en botones y tarjetas para mejorar la experiencia de usuario.  
✅ **Optimización del código** y separación de componentes.  

---

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3** (Framework frontend)
- **Vue Router** (Gestión de rutas)
- **Tailwind CSS** (Estilización)
- **PNPM** (Gestor de paquetes)
- **PostCSS & Autoprefixer** (Procesadores de CSS)

---

## 📂 Estructura del Proyecto

```
proyecto-vue/
│── public/              # Archivos estáticos
│── src/
│   │── assets/          # Imágenes y recursos
│   │── components/      # Componentes reutilizables
│   │   ├── Product/
│   │   │   ├── ItemProduct.vue
│   │   │   ├── ListaProductos.vue
│   │── views/           # Vistas principales
│   │   ├── Home.vue
│   │   ├── Products.vue
│   │── router/          # Configuración de rutas
│   │── main.js          # Archivo principal de Vue
│── package.json         # Configuración del proyecto
│── tailwind.config.js   # Configuración de Tailwind CSS
│── postcss.config.js    # Configuración de PostCSS
│── README.md            # Este archivo
```

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 🔹 1️⃣ Clona el repositorio
```bash
git clone https://github.com/MiltonMenchaca/Vue-store
cd proyecto-vue
```

### 🔹 2️⃣ Instala las dependencias
```bash
pnpm install
```

### 🔹 3️⃣ Inicia el servidor de desarrollo
```bash
pnpm run serve
```

Luego, abre **http://localhost:8080/** en tu navegador.


## 📌 Mejoras Futuras

- 🛍️ **Sistema de carrito de compras**.  
- 🔍 **Búsqueda y filtrado de productos**.  
- 💳 **Integración con pasarelas de pago**.  

---


