
const { src, dest, task, series, watch } = require("gulp");
const rm = require("gulp-rm");
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');


sass.compiler = require('node-sass');

task("clean", () => {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src("src/*.html").pipe(dest("dist"))
  .pipe(reload({stream:true}));
});

const styles = [
'node_modules/normalize.css/normalize.css',
"src/SASS/main.scss"
]

task("styles", () => {
  return src(styles)
  .pipe(sourcemaps.init())
  .pipe(concat("main.scss"))
  .pipe(sass().on("error", sass.logError))
  .pipe(autoprefixer({
    cascade: true
}))
.pipe(sourcemaps.write())
  .pipe(dest("dist"));
 
});

task('scripts', () =>{
return src("src/js/*.js")
.pipe(sourcemaps.init())
.pipe(concat("main.js"))
.pipe(sourcemaps.write())
.pipe(dest("dist"));

})

task('server', ()=>{
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

watch("./src/SASS/**/*.scss", series("styles"));
watch("./src/*.html", series("copy:html"));
task("default", series("clean","copy:html", "styles","scripts", "server"));