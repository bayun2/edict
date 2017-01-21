# edict

新建-》选择方式=》生成=》分享以后展示页
http://192.168.199.216/pages/createa -> createb(c) -> created -> createe

http://192.168.199.216/pages/createa?status=reply -> createb(c) -> created -> createe

openId:均表示当前用户

1 url：(创建|回复|收到回复， 通过参数不同区分，见下文)
在页面埋入状态信息：(创建)
status:create,
openId, nickname, headimgurl

// create页面预埋数据
window.scriptPath = '/dist/';
window.config = {
  status: 'create',
  openId: 'a',
  nickname: 'a用户',
  headimgurl: 'http://placehold.it/122x122'
}

在页面埋入状态信息：(回复)
status:reply,
openId, nickname, headimgurl, imgurl(新建圣旨生成图片), sourceOpenId（发起圣旨人）, sourceNickName

// reply页面预埋数据
window.scriptPath = '/dist/';
window.config = {
  status: 'reply',
  openId: 'b',
  nickname: 'b用户',
  headimgurl: 'http://placehold.it/122x122',
  sourceOpenId: 'a',
  sourceNickName: 'a用户',
  sourceMsg: '嘿嘿嘿',
  sourceHeadimgurl: 'http://placehold.it/122x122'
}

在页面埋入状态信息：(收到回复)
status:receive,
openId, nickname, headimgurl, imgurl(回复圣旨生成图片), sourceOpenId（回复圣旨人）, sourceNickName

// receive页面预埋数据
window.scriptPath = '/dist/';
// reply: 1 回复，2 拒绝
window.config = {
  status: 'receive',
  reply: 2,
  openId: 'a',
  nickname: 'a用户',
  headimgurl: 'http://placehold.it/122x122',
  sourceOpenId: 'b',
  sourceNickName: 'b用户',
  sourceMsg: '嘿嘿嘿',
  sourceHeadimgurl: 'http://placehold.it/122x122'
}

2 获取微信分享所需参数接口

3 /sendEdict
param:openId, msg, nickname, headimgurl
return:
  imgurl,
  (回复)： url?from=openId

4 /replyEdict
param:sourceOpenId, openId, (reply: true, msg, nickname, headimgurl) | (reply:false)
return:
(收到回复)
 A.遵旨：
  imgurl,
  url?from=openId&sourceOpenId=sourceOpenId&reply=true
 B.抗旨：
  imgurl,
  url?from=openId&sourceOpenId=sourceOpenId&reply=false

## START

```bash
$ npm run build # building source files
$ npm run dev # watching files change and building automaticly
```

## License

The MIT License (MIT)

Copyright (c) 2015 Your Github name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
