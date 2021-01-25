#!/usr/bin/env node

const fs = require('fs')
fs.copyFile('src/Config/index.js', (err) => {
    if (err) throw err;
    console.log('src/Config/index.js is api address good luck');
});
console.log("SPLIT React-Native Template initialized with success !");
