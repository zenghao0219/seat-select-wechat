# seat-select-wechat ( 微信小程序版)


![](https://img.shields.io/github/stars/zenghao0219/seat-select-wechat.svg?style=social)
![](https://img.shields.io/github/forks/zenghao0219/seat-select-wechat.svg?style=social)
![](http://progressed.io/bar/100?title=completed)
![](https://img.shields.io/github/license/zenghao0219/seat-select-wechat.svg)

### 座位图体系项目导航

- [移动端 seat-select](https://github.com/zenghao0219/seat-select)

- [微信小程序 seat-select-wechat](https://github.com/zenghao0219/seat-select-wechat)

- [后台控制端 seat-select-controller](https://github.com/zenghao0219/seat-select-controller)

- [数据接口端 seat-select-api](https://github.com/zenghao0219/seat-select-api)

- [座位JSON结构解析](https://github.com/zenghao0219/seat-select/tree/master/public/mock)

#### 点个Star呗
if this project is useful to you :D , Please star this project~

如果这个项目对你有帮助 :D 请点个star吧~

请使用`微信扫描`二维码查看demo

<img src="https://github.com/zenghao0219/files-store/blob/master/seats/gh_29060d58fbac_430.jpg?raw=true" width="200" hegiht="300"/>

> 此次项目是基于vue编写的类似淘票票和猫眼的电影`移动端`锁座页面,经过超过百个影厅的测试,其中包含功能
>
> - 座位图生成
> - 座位预览图生成
> - 座位`留空`检测
> - 座位智能选择`最优座位`算法
> - 自适应影厅大小
> - 座位图左侧导航栏的过道检测
> - 普通座位的选择逻辑
> - 情侣座位的选择逻辑
#### 项目截图

<img src="https://github.com/zenghao0219/files-store/blob/master/seats/QQ20190802-141103@2x.png?raw=true" width="200" hegiht="300"/>


### 赞助者名单
首先特别感谢赞助者的所有朋友们,真的特别感谢!(所有贡献者列表请在[此处](https://github.com/zenghao0219/contributors))
<details>
<summary>点击此处展开查看赞助最多的几位朋友</summary>

1. [*磊 (KaelLuo) (¥6.66)](http://github.com/KaelLuo)
2. *磊 (涅槃) (¥100)
3. *升平 (¥8.88)
4. 随影sky (¥66.6)
</details>

#### 智能选座示例
```
以下为多个影厅的智能选座gif图演示
```
<img src="https://github.com/zenghao0219/files-store/blob/master/seats/soogif1.gif?raw=true" width="200" hegiht="300"/>

<img src="https://github.com/zenghao0219/files-store/blob/master/seats/soogif2.gif?raw=true" width="200" hegiht="300"/>

<img src="https://github.com/zenghao0219/files-store/blob/master/seats/soogif3.gif?raw=true" width="200" hegiht="300"/>

#### 智能选座示例
```
以下为空位检测逻辑gif图演示
```
<img src="https://github.com/zenghao0219/files-store/blob/master/seats/soogif4.gif?raw=true" width="200" hegiht="300"/>

### 目录结构
```
.
├── app.js
├── app.json
├── app.wxss 
├── components //头部自定义组件
│   ├── head.js
│   ├── head.json
│   ├── head.wxml
│   └── head.wxss
├── data
│   └── json.js //mock数据
├── images //图片文件夹
├── pages
│   ├── about //关于页面
│   │   ├── about.js
│   │   ├── about.json
│   │   ├── about.wxml
│   │   └── about.wxss
│   └── seat-select //座位图页面
│       ├── seat-select.js
│       ├── seat-select.json
│       ├── seat-select.wxml
│       └── seat-select.wxss
├── project.config.json //小程序项目配置文件(默认生成)
├── sitemap.json //小程序项目文件(默认生成)
└── style
    ├── icon.wxss //icon图标css
    └── main.wxss //公共的css
```
### 如何导入项目

1. 下载好代码(别忘了点star哦~)
2. 使用微信开发者工具选导入项目,appid选择测试id

### 讨论

欢迎加群讨论: 3544395 (最近有小伙伴反应搜不到群,还有我这边接不到审核)

如果搜不到的情况 加作者的个人qq 424115114

### 开源详情

当我们使用github或者其它地方的开源项目时候，需要注意开源项目的授权协议。开源不等于免费使用，如果公司使用开源项目时候违反其开源协议，有可能给公司或者个人带来版权纠纷。使用时候需要慎重阅读开源代码提供者的授权条件。
- 再此说明，代码可以给大家学习甚至商用，但是使用或是转载没有经过作者同意 ，甚至修改代码后删除原作者的项目地址等标识，造成作者损失的，存在法律风险

### 项目捐赠
写代码不易...请作者喝杯咖啡呗?

![](https://github.com/zenghao0219/files-store/blob/master/pay.jpeg?raw=true)

(PS: 支付的时候 请带上你的名字/昵称呀 会维护一个赞助列表~ )

### 其他项目

最近开发了一个垃圾分类的小程序 需要的朋友可以关注以下~

<img src="https://i.postimg.cc/9fgDX670/gh-15fa1fdd771b-1280.jpg" width="200" hegiht="300"/>
