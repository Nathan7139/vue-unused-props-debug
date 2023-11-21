module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        imports: ['vue'],
        dts: 'src/auto-import.d.ts',
      }),
    ],
  }
}