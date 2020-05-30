var StyleDictionary = require('style-dictionary').extend('./config.json');
var sass = require('sass');
var fs = require('fs');

// build style dictionary
StyleDictionary.buildAllPlatforms();

// compile sass to css using dart sass
sass.render({
    file: 'demo/style.scss',
    outFile: 'demo/style.css',
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile('demo/style.css', result.css, function(err){
        if(!err){
          //file written on disk
          console.log('compiled sass');
        } else {
            console.log(err);
        }
      });
    } else {
        console.log(error);
    }
});

sass.render({
    file: 'demo/themed/style-themed.scss',
    outFile: 'demo/themed/style-themed.css',
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile('demo/themed/style-themed.css', result.css, function(err){
        if(!err){
          //file written on disk
          console.log('compiled themed sass');
        } else {
            console.log(err);
        }
      });
    } else {
        console.log(error);
    }
});