const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.js', 'public/js')
   .vue({ version: 3 })
   .copy('resources/img/favicon.ico', 'public/img')
   .sass('resources/scss/app.scss', 'public/css')
   .webpackConfig((webpack) => {
      return {
         resolve: {
            alias: {
               '@': path.resolve('resources/js'),
               vue: path.resolve('node_modules', 'vue'),
               ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue')
            }
         },
         plugins: [
            new webpack.DefinePlugin({
               __VUE_OPTIONS_API__: true,
               __VUE_PROD_DEVTOOLS__: false
            }),
         ]
      }
   })


if(process.env.NODE_ENV == 'development') {
   mix.sourceMaps()
}

if(process.env.NODE_ENV == 'production') {
   mix.version()
}
