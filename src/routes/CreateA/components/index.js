import React from 'react';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link} = ReactRouter;

class CreateA extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['renderCnt'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  renderCnt() {
    const {status, nickname, sourceNickName, addParam} = this.props;
    if (status === 'create') {
      return (
        <div className="createa page">
          <div className="logo"></div>
          <div className="main"></div>
          <div className="txt"></div>
          <div className="btngroup">
            <Link className="btn a" to={addParam('/createb')}>发祝福</Link>
            <Link className="btn b" to={addParam('/createc')}>发指令</Link>
          </div>
        </div>
      );
    } else if (status === 'reply') {
      return (
        <div className="replya page">
          <div className="logo"></div>
          <div className="main"></div>
          <div className="txt">
            <p>{nickname}:</p>
            <p>这是一封来自<span className="nickname">{sourceNickName}</span>陛下的旨意</p>
          </div>
          <div className="btngroup">
            <Link className="btn" to={addParam('/createf')}>打开</Link>
          </div>
        </div>
      );
    } else if (status === 'receive') {
      return (
        <div className="replya page">
          <div className="logo"></div>
          <div className="main"></div>
          <div className="txt">
            <p>{nickname}陛下:</p>
            <p>这是一封来自<span className="nickname">{sourceNickName}</span>的回旨</p>
          </div>
          <div className="btngroup">
            <Link className="btn" to={addParam('/created')}>打开</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    const cnt = this.renderCnt();
    return cnt;
  }
}

CreateA.defaultProps = {

};

CreateA.propTypes = {
  addParam: React.PropTypes.func,
  nickname: React.PropTypes.string,
  reply: React.PropTypes.number,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateA;
