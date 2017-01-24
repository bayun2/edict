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
    msg = msg.substr(0, 48);
    this.props.setState({msg});
  }

  sendEdict() {
    const self = this;
    fetch(`${window.apiPath}/add${window.apiSuffix}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: `msg=${self.props.msg}`
    })
      .then(response => response.json())
      .then(json => {
        self.props.setState({
          image: json.image,
          shareUrl: json.shareUrl
        }, () => {
          const url = this.props.addParam('created');
          browserHistory.push(url);
        });
      })
      .catch(() => {

      });
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
          shareUrl: json.shareUrl
        }, () => {
          const url = this.props.addParam('created');
          browserHistory.push(url);
        });
      })
      .catch(() => {

      });
  }

  renderCnt() {
    const {addParam, status} = this.props;
    let adImgHeight = 98*window.innerWidth/640;
    adImgHeight = `${adImgHeight}px`;
    if (status === 'create') {
      return (
          <div className="createb page">
            <div className="title">
              <div className="cnt">
                <textarea onChange={this.handleChange} placeholder="点击起草圣旨" value={this.props.msg}>
                </textarea>
              </div>
            </div>
            <div className="btn" onClick={this.sendEdict}>生成祝福</div>
            <div className="ad" style={{height: adImgHeight}}></div>
          </div>
      );
    } else if (status === 'reply') {
      return (
          <div className="replyc page">
            <div className="title">
              <div className="cnt">
                <textarea onChange={this.handleChange} placeholder="点此复旨" value={this.props.msg}>
                </textarea>
              </div>
            </div>
            <Link className="btn" onClick={this.replyEdict.bind(this, 1)}>生成</Link>
            <div className="ad" style={{height: adImgHeight}}></div>
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
  msgId: React.PropTypes.string,
  nickname: React.PropTypes.string,
  openId: React.PropTypes.string,
  setState: React.PropTypes.func,
  sourceOpenId: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateB;
