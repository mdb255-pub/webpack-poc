(function() {
  "use strict";

  var appContext = require.context('./app', true, /\.js$/);

  // What's going on here? If I comment these lines, all the .js files under ./app are still bundled
  appContext.keys()
    .filter(function(file) { return file.indexOf('.spec.') === -1 }) // Don't include unit tests
    .forEach(appContext);
})();