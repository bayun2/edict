import React from 'react';
import * as ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';

const {browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['reply', 'refuse', 'replyEdict'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  replyEdict(reply) {
    const self = this;
    fetch(`${window.apiPath}/add${window.apiSuffix}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: `reply=${reply}&msg=${self.props.msg}&msgId=${self.props.msgId}`
    })
      .then(response => response.json())
      .then(json => {
        self.props.setState({
          image: json.image,
          shareUrl: json.shareUrl,
          reply
        }, () => {
          const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
          if (isWeixin) {
            wx.closeWindow();
          } else {
            const url = self.props.addParam('created');
            browserHistory.push(url);
          }
        });
      })
      .catch(() => {
      });
  }

  refuse() {
    this.replyEdict(2);
  }

  reply() {
    const url = this.props.addParam('createb');
    this.props.setState({
      reply: 1
    }, () => {
      browserHistory.push(url);
    });
  }

  render() {
    let top = window.innerWidth*832/640;
    top = `${top}px`;
    let adImgHeight = 98*window.innerWidth/640;
    adImgHeight = `${adImgHeight}px`;
    return (
        <div className="replyb picwrap">
          <img className="cutpic" src={this.props.curImage} />
          <div className="btngroup" style={{top}}>
            <div className="btn a" onClick={this.reply}>复旨</div>
            <div className="btn b" onClick={this.refuse}>抗旨</div>
          </div>
          <div className="ad" style={{height: adImgHeight}}></div>
        </div>
    );
  }
}

CreateD.defaultProps = {

};

CreateD.propTypes = {
  addParam: React.PropTypes.func,
  curImage: React.PropTypes.string,
  headimgurl: React.PropTypes.string,
  msg: React.PropTypes.string,
  msgId: React.PropTypes.string,
  nickname: React.PropTypes.string,
  openId: React.PropTypes.string,
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  sourceOpenId: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
