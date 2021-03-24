var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
// var tunnel = require('localtunnel');
var imagemin = require('gulp-imagemin');
//var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();


//Change paths Src and Dist according to your project
//Style src and dist
var styleSrc = 'assets/src/scss/style.scss';
var styleDist = 'assets/css/';
var styleWatch = 'assets/src/scss/**/*.scss';

var scriptFolder = './assets/src/js/';
//Scripts src and dist
var scriptSrc = scriptFolder + '/script.js';
// var slickSrc = scriptFolder + '/slick.js';
var scriptDist = './' + 'assets/js/';
var scriptWatch = 'assets/src/js/**/*.js';
var jsFiles = [scriptSrc];

//Images src and dist
var imgSrc = 'assets/src/images/*';
var imgDist = 'assets/src/images';

var htmlWatch = '**/*.html';
var phpWatch = '**/*.php';


function browser_sync() {
    browserSync.init({
        proxy: "localhost/dissect",
        injectChanges: true
    });
}

function reload(done) {
    browserSync.reload();
    done();
}


function style(done) {
    gulp.src(styleSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        //.pipe( rename( { suffix: '.min' }) )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(styleDist))
        .pipe(browserSync.stream());

    done();
}


// Scripts
function script(done) {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(uglify()
            .on('error', function (e) {
                console.log(e);
            }))
        .pipe(gulp.dest(scriptDist))
        .pipe(browserSync.stream());

    done();
};


//Images and SVG
function image(done) {
    gulp.src(imgSrc)
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 7,
            interlaced: true
        }))
        .pipe(gulp.dest(imgDist));

    done();
};


//JShint
function js_hint(done) {
    return gulp.src(scriptSrc)
        .pipe(reload({
            stream: true,
            once: true
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

    done();
};


function watch_files() {
    gulp.watch(styleWatch, gulp.parallel(style, reload));
    gulp.watch(scriptWatch, gulp.series(script, reload));
    gulp.watch(htmlWatch, reload);
    gulp.watch(phpWatch, reload);
}

gulp.task("style", style);
gulp.task("script", script);
gulp.task("image", image);
gulp.task("jshint", js_hint);
gulp.task("default", gulp.parallel(style, script, image));
gulp.task("watch", gulp.parallel(browser_sync, watch_files));
