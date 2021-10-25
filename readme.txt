1.mkdir webpack-demo
2.cd webpack-demo
3.npm init
4.npm install webpack webpack-cli --save-dev
5.create index.html in webapack

<!DOCTYPE html>
<html>n
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>

6.create src folder in  webpack and inside that index.js file => paste code


function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

7.create dist(spelling should be same) folder move index.html in to it
8.create dist folder move index.html in to it
9.inside json file add this "private": true,and remove "main": "index.js"

10.install npm i axios

11.import axios from "axios" // in index.js file
12.npx webpack in terminal(main.js will be created)
13.<script src="main.js"></script> to index.html.

14.create file webpack.config.js in webpack folder
//paste this code,
 const path = require('path');

module.exports = {
 mode: 'development',
 entry: {
   index: './src/index.js',
 },
  output: {

   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

15 npx webpack in terminal
16. index.bundle.js will be created.
17.delete main.js
18.in index.html change src/main.js to index.bundle.js
19.npx webpack in terminal
20.ready to code.

