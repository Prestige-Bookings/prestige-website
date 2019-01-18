module.exports = function (grunt) {
  return {
    html: {
      files: ['src/**/*.html'],
      tasks: ['copy', 'includes'],
    },
    css: {
      files: ['src/sass/*.scss'],
      tasks: ['stylelint', 'sass', 'postcss', 'cssmin', 'copy', 'includes'],
    },
    bootstrap: {
      files: ['src/assets/css/*'],
      tasks: ['copy:css'],
    },
    images: {
      files: ['src/assets/images/*'],
      tasks: ['imagemin'],
    },
    svg: {
      files: ['src/assets/svg/*'],
      tasks: ['svgmin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
