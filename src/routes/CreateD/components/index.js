import React from 'react';
// import html2canvas from 'html2canvas';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

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
    const {status, reply} = this.props;
    let {msg, headimgurl, nickname} = this.props;
    if (status === 'create') {
      return (
          <div className="created page">
            {this.renderShowTip()}
            <div className="title">
              <div className="cnt">{msg}</div>
            </div>
            <img className="headimg" src={headimgurl} />
            <div className="nickname">{nickname}</div>
            <Link className="btn" to={'/createa'}>再玩一次</Link>
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
    const cnt = this.renderCnt();
    return cnt;
  }
}

CreateD.defaultProps = {

};

CreateD.propTypes = {
  addParam: React.PropTypes.func,
  headimgurl: React.PropTypes.string,
  msg: React.PropTypes.string,
  nickname: React.PropTypes.string,
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
