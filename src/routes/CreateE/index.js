module.exports = {
  path: 'createe',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./components/index'));
    }, 'CreateE');
  }
};
