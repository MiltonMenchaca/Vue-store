module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // Ejemplo: Soporte para decoradores
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // Ejemplo: Soporte para propiedades de clase
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};
