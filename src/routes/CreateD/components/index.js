import React from 'react';
import * as ReactRouter from 'react-router';
import ShareWeixin from '../../../lib/shareWeixin';

const {Link, browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTip: false,
      showBtn: false
    };

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {
    const {reply, status, addParam, nickname} = this.props;
    const self = this;
    if (status !== 'receive') {
      const shareTitle = status === 'create' ?
      `这是一道来自${nickname}的新春圣旨` :  `尊敬的陛下，这是来自${nickname}的复旨`;
      const shareDesc = status === 'create' ? '皇恩浩荡，还不快快接旨' : '爱卿回禀，请陛下用心体会';
      const weixin_share_config = {
        link: this.props.shareUrl,
        imgUrl: this.props.image,
        success: function(type) {
          if (status === 'create') {
            const url = addParam('createe');
            browserHistory.push(url);
          } else if (status === 'reply') {
            self.setState({
              showBtn: true
            });
          }
        },
        timeline: {
          title: shareTitle
        },
        appmessage: {
          title: shareTitle,
          desc: shareDesc
        }
      };
      new ShareWeixin(weixin_share_config);
      setTimeout(() => {
        this.show();
      }, 3000);
    } else {
      if (reply === 2) {
        setTimeout(() => {
          browserHistory.push('createa');
        }, 5000);
      }
    }
  }

  componentWillUnmount() {
    if (this.props.status === 'reply') {
      this.props.setState({
        reply: 0
      });
    }
  }

  show() {
    this.setState({
      showTip: true
    });
  }

  renderShowTip() {
    if (this.state.showTip) {
      let imgHeight = 434*window.innerWidth/640;
      imgHeight = `${imgHeight}px`;
      return <div className="shareTip" style={{height: imgHeight}}></div>;
    } else {
      return '';
    }
  }

  renderCnt() {
    const {status, reply, image, curImage} = this.props;
    let adImgHeight = 98*window.innerWidth/640;
    adImgHeight = `${adImgHeight}px`;
    if (status === 'create') {
      return (
          <div className="created picwrap">
            {this.renderShowTip()}
            <img className="cutpic" src={image}/>
            <div className="ad" style={{height: adImgHeight}}></div>
          </div>
      );
    } else if (status === 'reply') {
      let top = window.innerWidth*832/640;
      top = `${top}px`;
      let btnCnt = '';
      if (this.state.showBtn) {
        btnCnt = (
          <div className="btngroup" style={{top}}>
            <a className="btn" href="//dlkddh.derlook.com/pages/createa">我也要颁圣旨</a>
          </div>
        );
      }
      return (
        <div className="created picwrap">
          {this.renderShowTip()}
          <img className="cutpic" src={image} />
          {btnCnt}
          <div className="ad" style={{height: adImgHeight}}></div>
        </div>
      );
    } else if (status === 'receive') {
      if (reply === 1) {
        let top = window.innerWidth*832/640;
        top = `${top}px`;
        return (
          <div className="relyd picwrap">
            <img className="cutpic" src={curImage} />
            <div className="btngroup" style={{top}}>
              <a className="btn" href="//dlkddh.derlook.com/pages/createa">再玩一次</a>
            </div>
            <div className="ad" style={{height: adImgHeight}}></div>
          </div>
        );
      } else if (reply === 2) {
        return (
          <div className="relyd picwrap">
            <img className="cutpic" src={curImage} />
            <div className="ad" style={{height: adImgHeight}}></div>
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
  curImage: React.PropTypes.string,
  headimgurl: React.PropTypes.string,
  image: React.PropTypes.string,
  msg: React.PropTypes.string,
  nickname: React.PropTypes.string,
  reply: React.PropTypes.number,
  setState: React.PropTypes.func,
  shareUrl: React.PropTypes.string,
  sourceHeadimgurl: React.PropTypes.string,
  sourceMsg: React.PropTypes.string,
  sourceNickName: React.PropTypes.string,
  status: React.PropTypes.string
};

module.exports = CreateD;
