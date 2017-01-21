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
      nickname: window.config.nickname || '',
      headimgurl: window.config.headimgurl || '',
      sourceMsg: window.config.sourceMsg || '',
      sourceOpenId: window.config.sourceOpenId || '',
      sourceNickName: window.config.sourceNickName || '',
      sourceHeadimgurl: window.config.sourceHeadimgurl || '',
      reply: window.config.reply || 0,
    };
  }
  componentWillMount() {

    // const self = this;
    // window.fdt.getToken(tokenData => {
    //   if(!!tokenData && tokenData.token) {
    //     self.setState({
    //       myHeader: {
    //         'fdt-key': tokenData.token
    //       }
    //     });
    //     sessionStorage.setItem('key', tokenData.token);
    //   }
    // });
    // window.fdt.jsBridge.menuSetting({
    //   share: 1
    // });
    // const config = {
    //   title: 'FDT-小T擂台',
    //   msg: '我在小T擂台打败了巴菲特！你敢来挑战吗？',
    //   url: location.href,
    //   image: 'http://img.investmaster.cn/fdt_hz/klinetc/logo.png',
    //   type: '',
    //   category: ''
    // };
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
