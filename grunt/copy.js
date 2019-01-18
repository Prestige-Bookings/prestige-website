module.exports = {
    pages: {
        files: [
            { expand: true, cwd: 'src/',  src: ['**/*.html', 'CNAME', '*.txt', '*.xml', '*.htm'],                           dest: 'dist' },
        ],
    },
    css: {
        files: [
            { expand: true, cwd: 'src/',  src: ['**/*.css'],                           dest: 'dist/assets' },
        ],
    },
    js: {
        files: [
            { expand: true, cwd: 'src/',  src: ['**/*.js'],                           dest: 'dist' },
        ],
    }
};
