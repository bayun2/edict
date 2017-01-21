import React from 'react';
// import html2canvas from 'html2canvas';
import * as ReactRouter from 'react-router';
import UrlParse from 'url-parse';

const {Link, browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {
    // const getPixelRatio = function(context) {
    // 	const backingStore = context.backingStorePixelRatio ||
    // 		context.webkitBackingStorePixelRatio ||
    //     	context.mozBackingStorePixelRatio ||
    //     	context.msBackingStorePixelRatio ||
    //     	context.oBackingStorePixelRatio ||
    //     	context.backingStorePixelRatio || 1;
    // 	return (window.devicePixelRatio || 1) / backingStore;
    // };
    //
    // const canvas = document.createElement('canvas');
    // const context = canvas.getContext('2d');
    // const scaleBy = getPixelRatio(context);
    // const w = window.innerWidth;
    // const h = window.innerHeight;
    // canvas.width = w * scaleBy;
    // canvas.height = h * scaleBy;
    // canvas.style.width = `${w}px`;
    // canvas.style.height = `${h}px`;
    // context.scale(scaleBy, scaleBy);
    // const ele = document.querySelector('.created');
    // html2canvas(ele, {
    //   allowTaint: true,
    //   taintTest: false,
    //   canvas,
    //   onrendered: canvas => {
    //     const image = canvas.toDataURL('image/jpg');
    //     document.querySelector('.created').innerHTML =
    //     `<img src='${image}' style='width:${w}px;height:${h}px'>`;
    //   }
    // });
  }

  componentWillUnmount() {
    if (this.props.status === 'reply') {
      this.props.setState({
        reply: 0
      });
    }
  }

  renderCnt() {
    const {status, reply} = this.props;
    let {msg, headimgurl, nickname} = this.props;
    if (status === 'create') {
      return (
          <div className="created page">
            <div className="title">
              <div className="cnt">{msg}</div>
            </div>
            <img className="headimg" src={headimgurl} />
            <div className="nickname">{nickname}</div>
            <Link className="btn" to={'/createa'}>再玩一次</Link>
          </div>
      );
    } else if (status === 'reply' || status === 'receive') {
      if (status === 'receive') {
        msg = this.props.sourceMsg;
        headimgurl = this.props.sourceHeadimgurl;
        nickname = this.props.sourceNickName;
      }
      if (reply === 1) {
        return (
          <div className="relyd page">
            <div className="title">
              <div className="cnt">{msg}</div>
            </div>
            <img className="headimg" src={headimgurl} />
            <div className="nickname">{nickname}</div>
          </div>
        );
      } else if (reply === 2) {
        return (
          <div className="created page">
            <div className="refuse"></div>
          </div>
        );
      }
    }
  }

  render() {
    const cnt = this.renderCnt();
    return cnt;
  }
}

CreateD.defaultProps = {

};

CreateD.propTypes = {
  addParam: React.PropTypes.func,
  headimgurl: React.PropTypes.string,
  msg: React.PropTypes.string,
  nickname: React.PropTypes.string,
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
