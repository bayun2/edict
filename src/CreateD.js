import React from 'react';
import html2canvas from 'html2canvas';

class CreateD extends React.Component {
  constructor(props) {
    super(props);

    this.funcName = [];
    this.funcName.forEach(funcName => {
      this[funcName] = this[funcName].bind(this);
    });
  }

  componentDidMount() {
    const getPixelRatio = function(context) {
    	const backingStore = context.backingStorePixelRatio ||
    		context.webkitBackingStorePixelRatio ||
        	context.mozBackingStorePixelRatio ||
        	context.msBackingStorePixelRatio ||
        	context.oBackingStorePixelRatio ||
        	context.backingStorePixelRatio || 1;
    	return (window.devicePixelRatio || 1) / backingStore;
    };

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const scaleBy = getPixelRatio(context);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * scaleBy;
    canvas.height = h * scaleBy;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    context.scale(scaleBy, scaleBy);
    const ele = document.querySelector('.content');
    html2canvas(ele, {
      canvas,
      onrendered: canvas => {
        const image = canvas.toDataURL('image/jpg');
        document.querySelector('.content').innerHTML =
        `<img src='${image}' style='width:${w}px;height:${h}px'>`;
      }
    });
  }

  render() {
    return (
        <div>
          <div className="content">
            <div className="test">生成的圣旨内容</div>
          </div>
        </div>
    );
  }
}

CreateD.defaultProps = {

};

CreateD.propTypes = {

};

module.exports = CreateD;
