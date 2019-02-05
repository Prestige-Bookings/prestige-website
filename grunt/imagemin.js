var mozjpeg = require('imagemin-mozjpeg');
module.exports = {
    dynamic: { 
      options: {
        optimizationLevel: 0,
        progressive: false,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg({fastCrush: false, quality: 100})]
      },
        files: [{
          expand: true,
          cwd: 'src/assets/',
          src: ['images/**/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/assets'
        }]
      }
};