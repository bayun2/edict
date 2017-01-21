import React from 'react';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link, browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['reply', 'refuse'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  refuse() {
    const url = this.props.addParam('created');
    this.props.setState({
      reply: 2
    }, () => {
      browserHistory.push(url);
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
        <div className="replyb page">
          <div className="title">
            <div className="cnt">{this.props.sourceMsg}</div>
          </div>
          <img className="headimg" src={this.props.sourceHeadimgurl} />
          <div className="nickname">{this.props.sourceNickName}</div>
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
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
