const gulpset = require('./../../gulpset');

// @verbose
gulpset.gulp.task('clean', () => gulpset.tasks.clean());

//----------------------------------------------------------------------------------------------------
//

const del = require('del');

gulpset.tasks.clean = path => {
  path = path || gulpset.paths.dest;
  return del(path).then(() => {
    if (typeof gulpset.paths.docz === 'string') {
      return del(gulpset.paths.docz);
    }
  });
};
