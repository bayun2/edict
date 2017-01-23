function ShareWeixin(opt) {
  this.share(opt);
}

ShareWeixin.prototype.share = function(opt) {
  const config = opt;
  if (!config.success) {
    config.success = function(type) {

    };
  }
  if (!config.cancel) {
    config.cancel = function(type) {

    };
  }
  wx.ready(function() {
    wx.onMenuShareTimeline({ // 分享到朋友圈
      title: (config.timeline && config.timeline.title) || config.title,
      link: config.link + (config.params || ''),
      imgUrl: config.imgUrl,
      success: function(o) {
        config.success.apply(config, ['timeline', o])
      },
      cancel: function(o) {
        config.cancel.apply(config, ['timeline', o])
      }
    });
    wx.onMenuShareAppMessage({ // 分享给好友
      title: (config.appmessage && config.appmessage.title) || config.title,
      desc: (config.appmessage && config.appmessage.desc) || config.desc,
      link: config.link + (config.params || ''),
      imgUrl: config.imgUrl,
      type: '',
      dataUrl: '',
      success: function(o) {
        config.success.apply(config, ['appmessage', o]);
      },
      cancel: function(o) {
        config.cancel.apply(config, ['appmessage', o]);
      }
    });
  });
};

module.exports = ShareWeixin;
