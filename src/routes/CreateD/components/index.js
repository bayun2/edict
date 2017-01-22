import React from 'react';
import * as ReactRouter from 'react-router';
import ShareWeixin from '../../../lib/shareWeixin';

const {Link, browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTip: false
    };

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {
    const weixin_share_config = {
      link: this.props.shareUrl,
      imgUrl: this.props.image,
      success: function(type) {
        const url = this.props.addParam('createe');
        browserHistory.push(url);
      },
      timeline: {
        title: this.props.msg
      },
      appmessage: {
        title: '圣旨',
        desc: this.props.msg
      }
    };
    new ShareWeixin(weixin_share_config);
    setTimeout(() => {
      this.show();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.props.status === 'reply') {
      this.props.setState({
        reply: 0
      });
    }
  }

  show() {
    this.setState({
      showTip: true
    });
  }

  renderShowTip() {
    if (this.state.showTip) {
      return <div className="shareTip"></div>;
    } else {
      return '';
    }
  }

  renderCnt() {
    const {status, reply, image} = this.props;
    let {msg, headimgurl, nickname} = this.props;
    if (status === 'create') {
      return (
          <div className="created picwrap">
            {this.renderShowTip()}
            <img className="cutpic" src={image} />
          </div>
      );
    } else if (status === 'reply' || status === 'receive') {
      if (status === 'receive') {
        msg = this.props.sourceMsg;
        headimgurl = this.props.sourceHeadimgurl;
        nickname = this.props.sourceNickName;
      }
      if (reply === 1) {
        return (
          <div className="relyd page">
            {this.renderShowTip()}
            <div className="title">
              <div className="cnt">{msg}</div>
            </div>
            <img className="headimg" src={headimgurl} />
            <div className="nickname">{nickname}</div>
          </div>
        );
      } else if (reply === 2) {
        return (
          <div className="created page">
            {this.renderShowTip()}
            <div className="refuse"></div>
          </div>
        );
      }
    }
  }

  render() {
    // const cnt = this.renderCnt();
    // return cnt;
    const {status, curImage} = this.props;
    let {image} = this.props;
    if (status === 'receive') {
      image = curImage;
    }
    return (
        <div className="created picwrap">
          {this.renderShowTip()}
          <img className="cutpic" src={image} />
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
  image: React.PropTypes.string,
  msg: React.PropTypes.string,
  nickname: React.PropTypes.string,
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  shareUrl: React.PropTypes.string,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
