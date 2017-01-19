import React from 'react';

class CreateA extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = ['goto'];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  goto(step) {
    this.props.goto(step);
  }

  render() {
    return (
        <div>
          <div className="btn" onClick={this.goto.bind(this, 'B')}>发祝福</div>
          <div className="btn" onClick={this.goto.bind(this, 'C')}>发指令</div>
        </div>
    );
  }
}

CreateA.defaultProps = {

};

CreateA.propTypes = {
  goto: React.PropTypes.func
};

module.exports = CreateA;
