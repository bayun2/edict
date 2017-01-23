function ShareWeixin(opt) {
  this.init(opt);
}

ShareWeixin.prototype.init = function(opt) {
  const self = this;
  const isWeixin = (/MicroMessenger/ig).test(navigator.userAgent);
  if (isWeixin) {
    $.ajax({
      url: '//dlkddh.derlook.com/message/wxConfig',
      data: {pageUrl: location.href},
      dataType: 'json',
      success: function(o) {
        alert(o.appId);
        alert(o.timestamp);
        alert(o.noncestr);
        alert(o.signature);
        wx.config({
          debug: true,
          appId: o.appId,
          timestamp: o.timestamp,
          nonceStr: o.noncestr,
          signature: o.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage',
            'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
        });
        self.share(opt);
      },
      error: function() {

      }
    });
  }
};

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
    wx.onMenuShareQQ({ // 分享到QQ
      title: (config.qq && config.qq.title) || config.title,
      desc: (config.qq && config.qq.desc) || config.desc,
      link: config.link + (config.params || ''),
      imgUrl: config.imgUrl,
      success: function(o) {
        config.success.apply(config, ['qq', o]);
      },
      cancel: function(o) {
        config.cancel.apply(config, ['qq', o]);
      }
    });
    wx.onMenuShareWeibo({ // 分享到腾讯微博
      title: (config.weibo && config.weibo.title) || config.title,
      desc: (config.weibo && config.weibo.desc) || config.desc,
      link: config.link + (config.params || ''),
      imgUrl: config.imgUrl,
      success: function(o) {
        config.success.apply(config, ['weibo', o]);
      },
      cancel: function(o) {
        config.cancel.apply(config, ['weibo', o]);
      }
    });
    wx.onMenuShareQZone({ // 分享到QQ空间
      title: (config.qzone && config.qzone.title) || config.title,
      desc: (config.qzone && config.qzone.desc) || config.desc,
      link: config.link + (config.params || ''),
      imgUrl: config.imgUrl,
      success: function(o) {
        config.success.apply(config, ['qzone', o]);
      },
      cancel: function(o) {
        config.cancel.apply(config, ['qzone', o]);
      }
    });
  });
};

module.exports = ShareWeixin;
