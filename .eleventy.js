const yaml = require('js-yaml');

module.exports = function(config) {
  
  config.addNunjucksFilter('objToArray', data => {
    // When using multiple files in the `data` directory
    // 11ty appends them as key/value pairs to an object.
    // This filter is useful for turning that object into an array,
    // by ignoring the filename (key), and extracting the values.
    return Object.values(data);
  });

  config.addDataExtension('yml', contents => yaml.load(contents));

  return {
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    dir: {
      // ⚠️ These values are both relative to your input directory.
      output: 'dist/',
      data: 'src/_data',
      includes: 'src/_includes',
      layouts: 'src/_layouts',
    }
  }
};