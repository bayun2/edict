module.exports = {
  path: 'createf',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/index'));
    }, 'CreateF');
  }
};
