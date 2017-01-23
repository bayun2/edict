import React from 'react';
import * as ReactRouter from 'react-router';
import ShareWeixin from '../../../lib/shareWeixin';

const {Link, browserHistory} = ReactRouter;

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTip: false
    };

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {
    const {reply, status} = this.props;
    if (status !== 'receive') {
      const weixin_share_config = {
        link: this.props.shareUrl,
        imgUrl: this.props.image,
        success: function(type) {
          const url = this.props.addParam('createe');
          browserHistory.push(url);
        },
        timeline: {
          title: this.props.msg
        },
        appmessage: {
          title: '圣旨',
          desc: this.props.msg
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
      return <div className="shareTip"></div>;
    } else {
      return '';
    }
  }

  renderCnt() {
    const {status, reply, image, curImage} = this.props;
    if (status === 'create') {
      return (
          <div className="created picwrap">
            {this.renderShowTip()}
            <img className="cutpic" src={image} />
          </div>
      );
    } else if (status === 'reply') {
      return (
        <div className="created picwrap">
          {this.renderShowTip()}
          <img className="cutpic" src={image} />
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
          </div>
        );
      } else if (reply === 2) {
        return (
          <div className="relyd picwrap">
            <img className="cutpic" src={curImage} />
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
