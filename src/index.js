import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import CreateA from './CreateA';
import CreateB from './CreateB';
import CreateC from './CreateC';
import CreateD from './CreateD';

let pagePath, apiPath, apiSuffix;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'debugremote') {
  pagePath = 'wealth/page/newAccount/requestWitness';
  apiPath = `${location.protocol}//${location.host}/wealth/api/newAccount`;
  apiSuffix = '';
} else if (process.env.NODE_ENV === 'development') {
  pagePath = 'pages/index';
  apiPath = `${location.protocol}//${location.host}/data`;
  apiSuffix = '.json';
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'create',
      step: 'A'
    };

    this.funcName = ['goto'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {

  }

  goto(step) {
    this.setState({
      step
    });
  }

  renderPage() {
    const {status, step} = this.state;
    if (status === 'create') {
      if (step === 'A') {
        return <CreateA goto={this.goto} />;
      } else if (step === 'B') {
        return <CreateB goto={this.goto} />;
      } else if (step === 'C') {
        return <CreateC goto={this.goto} />;
      } else {
        return <CreateD />;
      }
    } else if (status === 'reply') {
      this.renderCreatePage();
    } else if (status === 'receive') {
      this.renderCreatePage();
    }
  }

  render() {
    const curPage = this.renderPage();
    return (
      <div>
        {curPage}
      </div>
    );
  }
}

App.defaultProps = {

};

App.propTypes = {

};

const rootInstance = ReactDOM.render(<App/>, document.getElementById('J-activity'));

if (process.env.NODE_ENV === 'development') {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: () => [rootInstance]
  });
}
