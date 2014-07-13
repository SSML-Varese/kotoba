module.exports = function(grunt) {

  grunt.registerMultiTask("createRedirects", "Create redirect files", function() {
      var source = this.data.source,
          target = this.data.target,
          defaults = this.data.defaults,
          keys = this.data.keys,
          redirectKey = this.data.redirectKey,
          contents = "";

      // create path (if needed)
      if (!grunt.file.exists(target)) {
        grunt.file.mkdir(target);
      }

      var yaml = grunt.file.readYAML(source);

      for (var item in yaml) {
        contents = "";

        contents += "---\n";

        var redirectValue = yaml[item][redirectKey];
        contents = contents.concat(
          "permalink: /",target,"/",redirectValue,"/\n")

        for (var index in defaults) {
          contents = contents.concat(defaults[index], "\n");
        }

        for (var index in keys) {
          var key = keys[index];

          contents = contents.concat(key, ": ", yaml[item][key], "\n");
        }

        contents += "---\n";

        grunt.file.write(target + "/" + redirectValue + ".md", contents);

      }
      //grunt.log.write(yaml);
  });

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    createRedirects: {
      books: {
        source: "_data/books.yml",
        target: "quaderni",
        defaults: ["layout: redirect"],
        keys: ["title", "filename"],
        redirectKey: "number"
      },
      volumes: {
        source: "_data/volumes.yml",
        target: "volume",
        defaults: ["layout: redirect"],
        keys: ["title", "filename"],
        redirectKey: "number"
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['createRedirects']);

};
