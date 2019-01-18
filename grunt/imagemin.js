var mozjpeg = require('imagemin-mozjpeg');
module.exports = {
    dynamic: { 
      options: {
        optimizationLevel: 7,
        progressive: false,
        svgoPlugins: [{ removeViewBox: false }],
        use: [mozjpeg({fastCrush: true, quality: 100, smooth: 100})]
      },
        files: [{
          expand: true,
          cwd: 'src/assets/',
          src: ['images/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/assets'
        }]
      }
};