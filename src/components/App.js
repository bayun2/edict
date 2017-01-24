import React from 'react';
import ShareWeixin from '../lib/shareWeixin';

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
      $.ajax({
        url: '//dlkddh.derlook.com/message/wxConfig',
        data: {pageUrl: location.href.split('#')[0]},
        dataType: 'json',
        success: function(o) {
          wx.config({
            debug: false,
            appId: o.appId,
            timestamp: o.timestamp,
            nonceStr: o.noncestr,
            signature: o.signature,
            jsApiList: ['closeWindow', 'onMenuShareTimeline', 'onMenuShareAppMessage']
          });
          const weixin_share_config = {
            link: this.props.shareUrl,
            imgUrl: '',
            success: function(type) {
            },
            timeline: {
              title: '作为人中龙凤，拜年的方式也要不一样！'
            },
            appmessage: {
              title: '作为人中龙凤，拜年的方式也要不一样！',
              desc: '值此新春佳节，如果你是皇上，是犒赏三军大赦天下，还是……'
            }
          };
          new ShareWeixin(weixin_share_config);
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
