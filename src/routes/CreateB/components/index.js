import React from 'react';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link, browserHistory} = ReactRouter;

class CreateB extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['handleChange'];
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
            <Link className="btn" to={addParam('/created')}>生成祝福</Link>
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
            <Link className="btn" to={addParam('/created')}>生成</Link>
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
  setState: React.PropTypes.func,
  status: React.PropTypes.string
};

module.exports = CreateB;
