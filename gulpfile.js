/**
 * gulpfile.js made for :: Gulp v4
 * => Due to changes of how tasks working in version (from 3 to) 4 of gulp,
 *    this can be used either as template (for testing purposes)
 *    or for productive [deployment] tasks.
 * 
 * 
 * For installation via yarn (without package.json)
 * "yarn add gulp gulp-clean gulp-watch gulp-concat gulp-uglify gulp-sass gulp-minify-css"
 * 
 * If package.json already exists - use "yarn install" only to install packages (dependencies) declared inside package.json
 * 
 * For LiveReload (BrowserSync):
 * => yarn add browser-sync
 */


/**
 * Definitions
 */
var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    sass            = require('gulp-sass'),
    minify          = require('gulp-minify-css'),

/**
 * Configurations
 */
    inputSrc = 'Assets/';
    outputSrc = 'Assets/public/';
    fileName = 'incide.min';


/**
 * For downloaded (via third-party tools (e.g. npm, yarn, ptm, etc.))
 * => when you'd like to use the downloaded package / module,
 *    you've to link it here in order the task for js recognize it and concat & uglifys it.
 * NOTE: Watch out for case-sensivity of directory names!
 */
var modules = {
    "jquery"    : "node_modules/jquery/dist/jquery.min.js",
    "slick"     : "node_modules/slick-carousel/slick/slick.min.js"
};


/**
 * CSS Tasks
 */
gulp.task('css:build', function() {

    return gulp.src(inputSrc + "scss/**/*.{sass,scss}")
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(fileName + ".css"))
        .pipe(gulp.dest(outputSrc + "css"))
});
gulp.task('css:deploy', function() {
    return gulp.src(inputSrc + "scss/**/*.{sass,scss}")
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(fileName + ".css"))
        .pipe(minify())
        .pipe(gulp.dest(outputSrc + "css"))
});

/**
 * JS Tasks
 */
gulp.task('js:build', function() {

    return gulp.src([
        modules["jquery"],
        modules["slick"],

        inputSrc + "js/**/*.js"
        ])
        .pipe(concat(fileName + ".js"))
        .pipe(gulp.dest(outputSrc + "js"))
});
gulp.task('js:deploy', function() {
    return gulp.src([
        modules["jquery"],
        modules["slick"],

        inputSrc + "js/**/*.js"
        ])
        .pipe(concat(fileName + ".js"))
        .pipe(uglify())
        .pipe(gulp.dest(outputSrc + "js"));
});



/**
 * Build with Watcher Task
 */
gulp.task('watch:build:task', function() {

    gulp.watch(inputSrc + "scss/**/*.{sass,scss}", gulp.series('css:build'));
    gulp.watch(inputSrc + "js/**/*.js", gulp.series('js:build'));
});

gulp.task('watch:build', gulp.series('css:build', 'js:build', gulp.parallel('watch:build:task')));
gulp.task('build', gulp.series('css:build', 'js:build', gulp.parallel('watch:build')));



/**
 * Deploy with Watcher Task
 */
gulp.task('watch:deploy:task', function() {
    gulp.watch(inputSrc + "scss/**/*.{sass,scss}", gulp.series('css:deploy'));
    gulp.watch(inputSrc + "js/**/*.js", gulp.series('js:deploy'));
});

gulp.task('watch:deploy', gulp.series('css:deploy', 'js:deploy', gulp.parallel('watch:deploy:task')));
gulp.task('watch:deploy', gulp.series('css:deploy', 'js:deploy', gulp.parallel('watch:deploy')));


/**
 * Simple deploy task
 */
gulp.task("deploy", gulp.series("css:deploy", "js:deploy"));
