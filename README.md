# Vue-TypeScript-Webpack
Use the popular [Vue.js](https://github.com/vuejs/vue) framework with [TypeScript](https://github.com/microsoft/TypeScript), and build your application with [Webpack](https://github.com/webpack/webpack)!

- [About](#about)
- [Quick Guide](#quick-guide)
- [Detailed Info](#detailed-info)
  - [webpack.config.js](#webpackconfigjs)
  - [src](#src)
  - [out](#out)

## About
This is an example of building a project written in **Vue.js** + **Typescript** with **Webpack**.

## Quick Guide
1. Clone this repository and install dependencides:
```
$ npm install
```
2. Delete files in ```src``` and put your Vue.js project (written with TypeScript).
  - If the entry file name is not ```index.ts```, change a value of ```entry``` in ```wepack.config.js``` appropriately.
3. Build the project and check the output (The default path is ```out/build.js```):
```
$ npm run build
```
4. Or you can run the development server immediately (The default URL for DevServer is http://localhost:8080):
```
$ npm run server
```

## Detailed Info
### webpack.config.js
- ```entry```: An entry point of your source code
- ```output```: Build file settings
  - ```path```: An ABSOLUTE path that the build will be saved
  - ```publicPath```: Automatically creates prefixes to static files
  - ```filename```: A name of the build file
- ```module```
  - ```rules```: Rules for processing files
    - ```test```: Use RegEx to distinguish files by extension
    - ```loader```: A loader to process selected files
    - ```use```: A list of loaders to process selected files
    - ```options```: In this example, it's for compiling script part in .vue files written in TypeScript
- ```resolve```
  - ```extensions```: A list of extensions to be processed
- ```devServer```: Development server settings
  - ```contentBase```: DevServer will show index.html in this path
  - ```host```
  - ```port```
- ```plugins```: A webpack plugin list

### src
It is a simple HelloWorld example using Vue.

### out
- ```index.html```: A HTML file to contain the builded ```.js``` file
- ```build.js```: An output file of webpack build
