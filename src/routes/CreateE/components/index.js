import React from 'react';
import html2canvas from 'html2canvas';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link} = ReactRouter;

class CreateE extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {

  }

  render() {
    return (
        <div className="createe page">
          <Link className="btn a" to="/createa" />
          <div className="btn b"></div>
        </div>
    );
  }
}

CreateE.defaultProps = {

};

CreateE.propTypes = {

};

module.exports = CreateE;
