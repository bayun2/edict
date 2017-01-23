import React from 'react';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link, browserHistory} = ReactRouter;

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
          shareUrl: json.shareUrl
        }, () => {
          const url = self.props.addParam('created');
          browserHistory.push(url);
        });
      })
      .catch(() => {

      });
  }

  refuse() {
    this.props.setState({
      reply: 2
    }, () => {
      this.replyEdict(2);
    });
  }

  reply() {
    alert(0);
    const url = this.props.addParam('createb');
    try {
      this.props.setState({
        reply: 1
      }, () => {
        alert(1);
        browserHistory.push(url);
      });
    } catch(err) {
      alert(err);
    }

  }

  render() {
    let top = window.innerWidth*832/640;
    top = `${top}px`;
    return (
        <div className="replyb picwrap">
          <img className="cutpic" src={this.props.curImage} />
          <div className="btngroup" style={{top}}>
            <div className="btn a" onClick={this.reply}>复旨</div>
            <div className="btn b" onClick={this.refuse}>抗旨</div>
          </div>
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
