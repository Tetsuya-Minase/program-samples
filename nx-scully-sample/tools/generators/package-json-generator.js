const path = require('path');
const fs = require('fs');

const original = require('../../package.json');
const ROOT_PATH = path.resolve(__dirname, '../../');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist/apps/api');

const functionsJson = {
  main: "main.js",
  engines: {
    node: "12"
  }
};
(function writeJson() {
  const dependencies = original.dependencies;
  const writeJson = {
    ...functionsJson,
    dependencies
  }
  fs.writeFileSync(`${OUTPUT_PATH}/package.json`, JSON.stringify(writeJson));
})();