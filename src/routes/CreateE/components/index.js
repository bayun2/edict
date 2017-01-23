import React from 'react';
import html2canvas from 'html2canvas';
import * as ReactRouter from 'react-router';
import ShareWeixin from '../../../lib/shareWeixin';

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
    const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
    if (isWeixin) {
      $.ajax({
        url: '//dlkddh.derlook.com/message/wxConfig',
        data: {pageUrl: encodeURIComponent(`http://dlkddh.derlook.com/pages/createa${location.search}`)},
        dataType: 'json',
        success: function(o) {
          wx.config({
            debug: opt.debug || false,
            appId: o.appId,
            timestamp: o.timestamp,
            nonceStr: o.noncestr,
            signature: o.signature,
            jsApiList: ['closeWindow']
          });
        },
        error: function() {

        }
      });
    }
  }

  closeWindow() {
    const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
    if (isWeixin) {
      wx.closeWindow();
    }
  }

  render() {
    return (
        <div className="createe page">
          <a className="btn a" href="//dlkddh.derlook.com/pages/createa"></a>
          <div className="btn b" onClick={this.closeWindow}></div>
        </div>
    );
  }
}

CreateE.defaultProps = {

};

CreateE.propTypes = {

};

module.exports = CreateE;
