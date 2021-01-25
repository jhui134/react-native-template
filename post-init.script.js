#!/usr/bin/env node

const fs = require('fs')
fs.copyFile('src/Config/index.js', (err) => {
    if (err) throw err;
    console.log('src/Config/index.js');
});

console.log("SPLIT React-Native Template initialized with success !");
