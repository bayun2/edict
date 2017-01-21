module.exports = {
  path: 'createa',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/index'));
    }, 'CreateA');
  }
};
