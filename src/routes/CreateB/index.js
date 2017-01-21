module.exports = {
  path: 'createb',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/index'));
    }, 'CreateB');
  }
};
