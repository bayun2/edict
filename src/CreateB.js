import React from 'react';

class CreateB extends React.Component {
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
          <div className="btn" onClick={this.goto.bind(this, 'D')}>生成祝福</div>
        </div>
    );
  }
}

CreateB.defaultProps = {

};

CreateB.propTypes = {
  goto: React.PropTypes.func
};

module.exports = CreateB;
