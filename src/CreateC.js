import React from 'react';

class CreateC extends React.Component {
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
          <div className="btn" onClick={this.goto.bind(this, 'B')}>生成指令</div>
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
