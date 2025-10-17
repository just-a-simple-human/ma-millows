import { watch, src, dest } from "gulp";
import * as mainSass from "sass";
import gulpSass from "gulp-sass";
import concat from "gulp-concat";
import GulpUglify from "gulp-uglify";
import GulpCleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import htmlmin from "gulp-htmlmin";

function styles() {
  const sass = gulpSass(mainSass);
  return src("scss/*.scss")
    .pipe(autoPrefixer())
    .pipe(sass())
    .pipe(concat("index.css"))
    .pipe(dest("./"));
}

function concatJs() {
  return src("scripts/*.js").pipe(concat("index.js")).pipe(dest("./"));
}

function minCss() {
  return src("./index.css").pipe(GulpCleanCss()).pipe(dest("./dist"));
}

function minifyJs() {
  return src("./index.js").pipe(GulpUglify()).pipe(dest("./dist"));
}

function copyHtml() {
  return src("./*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist"));
}

function copyFonts() {
  return src("./fonts/*.otf", { encoding: false }).pipe(dest("./dist/fonts"));
}

function copyImages() {
  return src("./images/**/*.png", { encoding: false }).pipe(
    dest("./dist/images")
  );
}

async function buildTask() {
  minCss();
  minifyJs();
  copyHtml();
  copyFonts();
  copyImages();
}

function defaultTask() {
  watch("scss/*.scss", styles);
  watch("scripts/*.js", concatJs);
}

export { defaultTask as default, buildTask as build };
