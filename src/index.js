import './index.less';
import React from 'react';
import ReactDom from 'react-dom';
import * as ReactRouter from 'react-router';
import useBasename from 'history/lib/useBasename';
import es6Promise from 'es6-promise';
es6Promise.polyfill();
__webpack_public_path__ = window.scriptPath;
const {Router, browserHistory} = ReactRouter;
let pagePath;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'debugremote') {
  pagePath = 'pages';
  window.apiPath = '${location.protocol}//${location.host}/message';
  window.apiSuffix = '';
} else if (process.env.NODE_ENV === 'development') {
  pagePath = 'pages';
  window.apiPath = `${location.protocol}//${location.host}/data`;
  window.apiSuffix = '.json';
}

function withExampleBasename(history, dirname) {
  return useBasename(() => history)({basename: `/${dirname}`});
};

const rootRoute = {
  path: '/',
  component: require('./components/App'),
  childRoutes: [
    require('./routes/CreateA'),
    require('./routes/CreateB'),
    require('./routes/CreateC'),
    require('./routes/CreateD'),
    require('./routes/CreateE'),
    require('./routes/CreateF')
  ]
};

ReactDom.render((
  <Router
    history={withExampleBasename(browserHistory, pagePath)}
    routes={rootRoute}
  />
), document.getElementById('J-activity'));
