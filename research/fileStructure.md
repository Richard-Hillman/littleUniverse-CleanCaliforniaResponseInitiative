├── dist // compiled application files to be served
|   ├── css
|   |   ├── main.[contenthash:8].css
|   |   └── main.[contenthash:8].css.map
|   ├── js
|   |   ├── main.[hash].js // depending on app size, this may contain multiple js files for code splitting
|   |   └── main.[hash].js.map
|   ├── media
|   |   └── [hash].[ext] // static assets like fonts and images
|   └── favicon.ico
|   └── index.html
|
├── config // supporting "webpackdevserver" configuration files
|   ├── devServer.js
|   ├── envs.js
|   ├── optimization.js
|   ├── output.js
|   ├── paths.js
|   ├── plugins.js
|   └── rules.js
|
├── public
|   ├── favicon.ico
|   └── index.html
|
├── src
|   ├── actions // redux actions
|   ├── components // stateful and stateless reusable components that just display "stuff" -- stateful components change and manipulate the UI
|   ├── containers // stateful components that utilize the reusable "components" to CRUD data and/or are connected to redux
|   ├── images
|   ├── pages // utilize components/containers to display something when visiting a "/route"
|   ├── reducers // redux reducers
|   ├── root // aka "<App />" that combines "routes", redux and other top-level supporting files into one place
|   ├── routes // assigns "pages" to a "/route"
|   ├── styles // shared and/or global styles used by all "components"
|   ├── types // redux types
|   ├── utils // supporting app files: like test setup, custom polyfills, axios configurations, ...etc
|   └── index.js // a simple file that "ReactDOM.render"s the "App"
|
├── server.js // express setup to serve the "dist" folder
└── webpack.config.js