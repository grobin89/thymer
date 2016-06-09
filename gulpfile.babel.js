import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import uglify from "gulp-uglify";

gulp.task("default", ["transpile"]);

gulp.task("transpile", () => {

  return browserify("source/javascript/app.js")
    .transform("babelify")
    .bundle()
    .on("error", function(error){
      console.error( "\nError: ", error.message, "\n");
      this.emit("end");
    })
    .pipe(source("bundle.js"))
    // .pipe(uglify())
    .pipe(gulp.dest("public/assets/javascript"));

});



gulp.task("watch", ["transpile"], () => {
  gulp.watch("source/javascript/**/*.js", ["transpile"]);
});
