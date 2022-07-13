const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");
module.exports = defaultConfig;


//metro config file
//firbase.js
//app import
//package.json
//yarn install