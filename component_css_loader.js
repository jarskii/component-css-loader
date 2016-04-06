var fs = require('fs');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  var ext = query.ext || 'styl';
  var isCssModules = query.cssModules;

  var componentFileName = this.resourcePath.match(/[^\/]+$/)[0];
  var componentExt = componentFileName.match(/\.(.+)$/)[1];
  var styleFileName = componentFileName.replace(componentExt, ext);
  var stylePath = this.resourcePath.replace(componentExt, ext);
  console.log(query);

  try {
    var stats = fs.statSync(stylePath);
    if (stats.isFile()) {
      var requirePartString = isCssModules ? "var styles = require('./" : "require('./";

      return requirePartString + styleFileName + "');\n" + source;
    }
  } catch(e) {}

  return source;
};

