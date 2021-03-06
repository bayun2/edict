import React from 'react';
import * as ReactRouter from 'react-router';
import fetch from 'isomorphic-fetch';
const {Link, browserHistory} = ReactRouter;

class CreateC extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['sendEdict', 'handleChange'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  handleChange(event) {
    let msg = event.target.value;
    msg = msg.substr(0, 20);
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

  render() {
    let adImgHeight = 108*window.innerWidth/640;
    adImgHeight = `${adImgHeight}px`;
    return (
        <div className="createc page">
          <div className="title">
            <div className="cnt">
              <textarea onChange={this.handleChange} placeholder="点击起草圣旨" value={this.props.msg}>
              </textarea>
            </div>
          </div>
          <div className="btn" onClick={this.sendEdict}>生成指令</div>
          <div className="ad" style={{height: adImgHeight}}></div>
        </div>
    );
  }
}

CreateC.defaultProps = {

};

CreateC.propTypes = {
  addParam: React.PropTypes.func,
  setState: React.PropTypes.func,
  msg: React.PropTypes.string
};

module.exports = CreateC;
