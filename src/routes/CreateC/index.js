module.exports = {
  path: 'createc',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/index'));
    }, 'CreateC');
  }
};
