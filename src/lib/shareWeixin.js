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
        alert(4)
        wx.config({
          debug: weixin_share_config.debug || false,
          appId: o.appId,
          timestamp: o.timestamp,
          nonceStr: o.nonceStr,
          signature: o.signature,
          rawString: o.rawString,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage',
            'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
        });
        alert(3)
        self.share(opt);
      },
      error: function() {

      }
    });
  }
};

ShareWeixin.prototype.share = function(opt) {
  alert(5)
  const config = $.extend(weixin_share_config, opt);
  alert(6)
  if (!config.success) {
    config.success = function(type) {

    };
  }
  if (!config.cancel) {
    config.cancel = function(type) {

    };
  }
  alert(config)
  wx.ready(function() {
    alert(2)
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
