import React from 'react';
import * as ReactRouter from 'react-router';

const {Link} = ReactRouter;

class CreateE extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['closeWindow'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {

  }

  closeWindow() {
    const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
    if (isWeixin) {
      wx.closeWindow();
    }
  }

  render() {
    let adImgHeight = 108*window.innerWidth/640;
    adImgHeight = `${adImgHeight}px`;
    return (
        <div className="createe page">
          <a className="btn a" href="//dlkddh.derlook.com/pages/createa"></a>
          <div className="btn b" onClick={this.closeWindow}></div>
          <div className="ad" style={{height: adImgHeight}}></div>
        </div>
    );
  }
}

CreateE.defaultProps = {

};

CreateE.propTypes = {

};

module.exports = CreateE;
