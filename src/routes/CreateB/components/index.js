import React from 'react';
import * as ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';

const {Link, browserHistory} = ReactRouter;

class CreateB extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['handleChange', 'sendEdict', 'replyEdict'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentWillUnmount() {

  }

  handleChange(event) {
    let msg = event.target.value;
    msg = msg.substr(0, 50);
    this.props.setState({msg});
  }

  sendEdict() {
    this.postData = {
      openId: this.props.openId,
      msg: this.props.msg,
      nickname: this.props.nickname,
      headimgurl: this.props.headimgurl
    };
    fetch(`${window.apiPath}/sendEdict${window.apiSuffix}`, {
      method: 'POST',
      body: JSON.stringify(this.postData),
    })
      .then(response => response.json())
      .then(json => {
        browserHistory.push('created');
      })
      .catch(() => {

      });
  }

  replyEdict(reply) {
    this.postData = {
      sourceOpenId: this.props.sourceOpenId,
      reply,
      openId: this.props.openId,
      msg: this.props.msg,
      nickname: this.props.nickname,
      headimgurl: this.props.headimgurl
    };
    fetch(`${window.apiPath}/replyEdict${window.apiSuffix}`, {
      method: 'POST',
      body: JSON.stringify(this.postData),
    })
      .then(response => response.json())
      .then(json => {
        browserHistory.push('created');
      })
      .catch(() => {

      });
  }

  renderCnt() {
    const {addParam, status} = this.props;
    if (status === 'create') {
      return (
          <div className="createb page">
            <div className="title">
              <div className="cnt">
                <textarea onChange={this.handleChange} placeholder="点击起草圣旨"></textarea>
              </div>
            </div>
            <div className="btn" onClick={this.sendEdict}>生成祝福</div>
          </div>
      );
    } else if (status === 'reply') {
      return (
          <div className="replyc page">
            <div className="title">
              <div className="cnt">
                <textarea onChange={this.handleChange} placeholder="点此复旨" ></textarea>
              </div>
            </div>
            <Link className="btn" onClick={this.replyEdict.bind(this, 1)}>生成</Link>
          </div>
      );
    }
  }

  render() {
    const cnt = this.renderCnt();
    return cnt;
  }
}

CreateB.defaultProps = {

};

CreateB.propTypes = {
  addParam: React.PropTypes.func,
  headimgurl: React.PropTypes.string,
  msg: React.PropTypes.string,
  nickname: React.PropTypes.string,
  openId: React.PropTypes.string,
  setState: React.PropTypes.func,
  sourceOpenId: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateB;
