import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    // reply:0|1|2, 未回复，回复，拒绝
    this.state = {
      addParam: url => {
        const str = location.search;
        return str.indexOf('?') < 0 ? url : url+str;
      },
      status: window.config.status || '',
      openId: window.config.openId || '',
      msg: window.config.msg || '',
      msgId: window.config.msgId || '',
      nickname: window.config.nickname || '',
      headimgurl: window.config.headimgurl || '',
      sourceMsg: window.config.sourceMsg || '',
      sourceOpenId: window.config.sourceOpenId || '',
      sourceNickName: window.config.sourceNickName || '',
      sourceHeadimgurl: window.config.sourceHeadimgurl || '',
      reply: window.config.reply || 0,
      shareUrl: '',
      image: '',
      curImage: window.config.curImage || ''
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
    if (isWeixin) {
      alert(1)
      $.ajax({
        url: '//dlkddh.derlook.com/message/wxConfig',
        data: {pageUrl: encodeURIComponent(`http://dlkddh.derlook.com/pages/createa${location.search}`)},
        dataType: 'json',
        success: function(o) {
          wx.config({
            debug: true,
            appId: o.appId,
            timestamp: o.timestamp,
            nonceStr: o.noncestr,
            signature: o.signature,
            jsApiList: ['closeWindow', 'onMenuShareTimeline', 'onMenuShareAppMessage']
          });
        },
        error: function() {

        }
      });
    }
  }

  render() {
    const curData = this.state;
    curData.setState = this.setState.bind(this);
    return (
      <div className="m-page">
        {this.props.children && React.cloneElement(this.props.children, curData)}
      </div>
    );
  }
}

App.defaultProps = {

};

App.propTypes = {
  children: React.PropTypes.element
};

module.exports = App;
