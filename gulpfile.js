const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");

gulp.task("css", function() {
  return gulp
    .src("./src/assets/scss/index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./dist/assets/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/assets/scss/**/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css"));
