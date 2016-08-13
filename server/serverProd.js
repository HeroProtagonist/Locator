// Load environment variables
require('dotenv').config({ path: './env/production.env' });
const config = require('../webpack.config.prod');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(express.static('vendor'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('src/index.html'));
});

// Number(process.env.PORT)

app.listen(process.env.PORT, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${process.env.PORT}`);
});