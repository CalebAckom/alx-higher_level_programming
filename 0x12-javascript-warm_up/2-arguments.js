#!/usr/bin/node

const { argv } = require('process');
const agrs = argv.length;

if (agrs === 0) {
    console.log("No argument");
} else if (agrs === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
