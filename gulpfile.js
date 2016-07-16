var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserify  = require('browserify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var historyApi  = require('connect-history-api-fallback');
var del         = require('del');
var pngquant    = require('imagemin-pngquant');
var assign      = require('lodash.assign');

var path = {
  assets: 'assets',
  tmp: 'public'
};

gulp.task('eslint', function() {
  return gulp.src( path.assets + '/js//**/*.js' )
    .pipe( $.eslint() )
    .pipe( $.eslint.format() )
    .pipe( $.eslint.failOnError());
});

gulp.task('sass', function() {
  return gulp.src(path.assets + '/css/*.scss')
    .pipe($.plumber())
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe(gulp.dest(path.tmp + '/css'));
});

gulp.task('cssOptim', function() {
  return gulp.src(path.tmp + '/css/*.css')
    .pipe($.pleeease({
      fallbacks: {
        autoprefixer: ['last 2 versions']
      },
      optimizers: {
        minifier: true
      }
    }))
    .pipe(gulp.dest(path.tmp + '/css/'));
});

gulp.task( 'browserify', function() {
    return jscompile( false );
} );

gulp.task( 'watchify', function() {
    return jscompile( true );
} );

function jscompile ( isWatch) {
  var bundler;
  var vendors = [
    'jquery',
    'react'
  ];
  var customOptions = {
    entries: [path.assets + '/js/app.js'],
    require: vendors
  };
  var bundlerOptions = assign({}, watchify.args, customOptions);

  if ( isWatch ) {
    bundler = watchify( browserify(bundlerOptions) );
  } else {
    bundler = browserify(bundlerOptions);
  }

  function rebundle() {
    return bundler
      .bundle()
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(source('app.js'))
      .pipe(gulp.dest(path.tmp + '/js'))
  }
  bundler.on( 'update', function() {
    rebundle();
  } );
  bundler.on( 'log', function( message ) {
    console.log( message );
  });

  return rebundle();

}

gulp.task('uglify', function() {
  return gulp.src(path.tmp + '/js/*.js')
    .pipe($.uglify())
    .pipe(gulp.dest(path.tmp + '/js'));
});

gulp.task('imageOptim', function() {
  return gulp.src(path.tmp + '/img/**/*.png')
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant({
        quality: 60-80,
        speed: 1
      })]
    }))
    .pipe(gulp.dest(path.tmp + '/img'));
});

gulp.task('copy:dev', function() {
  return gulp.src([
      path.assets + '/**/*.!(scss|js|md)'
    ])
    .pipe(gulp.dest(path.tmp));
});

gulp.task('clean:tmp', function(cb) {
  del([
    path.tmp
  ], cb);
});

gulp.task('clean:mock', function(cb) {
  del([
    path.tmp + '/html'
  ], cb);
});

gulp.task('watch', ['browser-sync'], function() {
  //gulp.watch(path.assets + '/js/**/*.js', ['watchify']);
  // watchifyが思うように動かないので、いったん、browserifyで代用
  gulp.watch(path.assets + '/js/**/*.js', ['browserify']);
  gulp.watch(path.assets + '/css/**/*.scss', ['sass']);
  gulp.watch(path.assets + '/**/*.html', ['copy:dev']);
});

gulp.task('browser-sync', function() {

  browserSync({
    port: 4000,
    server: {
      baseDir: path.tmp,
      middleware: [historyApi()]
    },
    startPath:'/'
  });
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:tmp',
    ['copy:dev', 'sass', 'browserify'],
    callback
  );
});

gulp.task('serve', function() {
  runSequence(
    'build',
    'watch'
  );
});

gulp.task('dist', function() {
  runSequence(
    'build',
    'cssOptim',
    'imageOptim',
    'uglify'
  );
});
