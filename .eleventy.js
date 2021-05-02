const yaml = require("js-yaml");

module.exports = eleventyConfig => {
  
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
  
  eleventyConfig.addNunjucksFilter( 'json', obj => JSON.stringify(obj));

};