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
    this.postData = {
      reply,
      msg: this.props.msg,
      msgId: this.props.msgId
    };
    fetch(`${window.apiPath}/add${window.apiSuffix}`, {
      method: 'POST',
      body: JSON.stringify(this.postData),
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

  refuse() {
    this.props.setState({
      reply: 2
    }, () => {
      this.replyEdict(2);
    });
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
    return (
        <div className="replyb picwrap">
          <img className="cutpic" src={this.props.curImage} />
          <div className="btngroup">
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
