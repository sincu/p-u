// npm install --save-dev gulp gulp-sass browser-sync del

var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload
var del = require('del')

gulp.task('compileSass', function() {
    gulp.src('source/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css/'))
    .pipe(reload({stream: true}))
})

gulp.task('buildHTML', function() {
    gulp.src('source/index.html')
    .pipe(gulp.dest('public/'))
    .pipe(reload({stream: true}))
})

gulp.task('buildCSS', function() {
    gulp.src('source/css/*.css')
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream: true}))
})

gulp.task('buildJS', function() {
    gulp.src('source/js/*.js')
    .pipe(gulp.dest('public/js/'))
    .pipe(reload({stream: true}))
})

gulp.task('buildFonts', function() {
    gulp.src('source/fonts/*.*')
    .pipe(gulp.dest('public/fonts/'))
    .pipe(reload({stream: true}))
})

gulp.task('build', ['compileSass', 'buildCSS', 'buildHTML', 'buildJS', 'buildFonts'])

gulp.task('watch', function() {
    gulp.watch('source/scss/*/*.scss', ['compileSass'])
    gulp.watch('source/css/*.css', ['buildCSS'])
    gulp.watch('source/index.html', ['buildHTML'])
    gulp.watch('source/js/*.js', ['buildJS'])
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "public/"
        }
    })
})

gulp.task('default', ['watch', 'server'])
