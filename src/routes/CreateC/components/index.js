import React from 'react';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link} = ReactRouter;

class CreateC extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  render() {
    return (
        <div className="createc page">
          <div className="title">
            <div className="cnt">
              <textarea placeholder="点击起草圣旨"></textarea>
            </div>
          </div>
          <Link className="btn" to="/created">生成指令</Link>
        </div>
    );
  }
}

CreateC.defaultProps = {

};

CreateC.propTypes = {
  goto: React.PropTypes.func
};

module.exports = CreateC;
