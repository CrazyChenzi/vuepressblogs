/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2000085.jpg",
    "revision": "6cee4edc33a7286f14504a36d1a554e5"
  },
  {
    "url": "323970.jpg",
    "revision": "71fa07e926c0721ffac39d8725a881c7"
  },
  {
    "url": "325190.jpg",
    "revision": "8be1e8df74087dbe5b37a95813747908"
  },
  {
    "url": "About.html",
    "revision": "c81ef84d0cfc267019dd75199268b5e3"
  },
  {
    "url": "assets/css/0.styles.bfe900af.css",
    "revision": "7a0ad4f5b4aebbe79bbca9c786abfbc8"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.061fa625.js",
    "revision": "66308493b6b876dba3c2c94d160d1e79"
  },
  {
    "url": "assets/js/10.c4676a10.js",
    "revision": "2b3cc7b23c027133dffaa6e16ec4a876"
  },
  {
    "url": "assets/js/11.f8710094.js",
    "revision": "bd6212eab986bd96d3b943ef5254a3c3"
  },
  {
    "url": "assets/js/12.7e9dcf7e.js",
    "revision": "a5ecb696457709100e68d74bf4d6076f"
  },
  {
    "url": "assets/js/13.3dd02ed1.js",
    "revision": "21df0b0fb85568d2517253358ff68e84"
  },
  {
    "url": "assets/js/14.128c0e60.js",
    "revision": "a6aaabe4d5ad32ff8168677d78c11863"
  },
  {
    "url": "assets/js/15.8db71c0c.js",
    "revision": "103bceb68bc7260c514e2648de4184ab"
  },
  {
    "url": "assets/js/16.abb7957d.js",
    "revision": "b8e56c9fec50343552f7e17a14da6b80"
  },
  {
    "url": "assets/js/17.813a982a.js",
    "revision": "e76b8174487065a9046fd732e0cec8f9"
  },
  {
    "url": "assets/js/18.e11a209c.js",
    "revision": "17208f8b926960f08e4a93ee83a1a3c6"
  },
  {
    "url": "assets/js/19.6aa3a2db.js",
    "revision": "c6583d6dde2022abb69f51603d18a6e7"
  },
  {
    "url": "assets/js/20.0ed10ced.js",
    "revision": "c6319d1b690ad2edfef01b080ce5dd3b"
  },
  {
    "url": "assets/js/21.b1720045.js",
    "revision": "da93714fab10d256d4a5e42509f839bf"
  },
  {
    "url": "assets/js/22.113e448c.js",
    "revision": "5ee9b52a9714705831d290bf125945fe"
  },
  {
    "url": "assets/js/23.5b6e8703.js",
    "revision": "71792783a8509046dfc0fefba5a2fed9"
  },
  {
    "url": "assets/js/24.ff005f42.js",
    "revision": "75c652266b4dcc4ba5b1b9bea329392e"
  },
  {
    "url": "assets/js/25.06356123.js",
    "revision": "d934c9ea2a95d80a961fcfe9808a8681"
  },
  {
    "url": "assets/js/26.52e0bf60.js",
    "revision": "c95b8585b82096831d9f448b6510e826"
  },
  {
    "url": "assets/js/27.15564a40.js",
    "revision": "2b3e0d986c3a590c94e0981d02f4283e"
  },
  {
    "url": "assets/js/28.0bd1cdaa.js",
    "revision": "33b4e0a608af7b514edf4ff5f19d7568"
  },
  {
    "url": "assets/js/29.2f58df83.js",
    "revision": "bddbb405d61ccc50eca1c93ccb6a54de"
  },
  {
    "url": "assets/js/3.57f905bc.js",
    "revision": "99629d1a579b3999a4083e26ba482fb7"
  },
  {
    "url": "assets/js/30.1456ae03.js",
    "revision": "764251d09b41f49dfc3839376b4f148c"
  },
  {
    "url": "assets/js/31.e579ffe4.js",
    "revision": "815f8be387349fe52830cef39cfcb5ec"
  },
  {
    "url": "assets/js/32.f9229f6d.js",
    "revision": "c0cb2c9c4cf11f0c2b1bc96cf15b414d"
  },
  {
    "url": "assets/js/33.52ccf41e.js",
    "revision": "6bbc3783f54ea497e2c83a7666a5b4e0"
  },
  {
    "url": "assets/js/34.ba7a5e3a.js",
    "revision": "415cd0e8d5e1643b1824f1e5f5865e2d"
  },
  {
    "url": "assets/js/35.17671982.js",
    "revision": "d4ecff446bc3b93074e54e1e6c5ee3ce"
  },
  {
    "url": "assets/js/36.951210e5.js",
    "revision": "3ffab9fbe13982189b04a890b8727aad"
  },
  {
    "url": "assets/js/37.b7f97e2f.js",
    "revision": "9a0c47988fe5a5a7fa0f95046f193b02"
  },
  {
    "url": "assets/js/38.09c12eb0.js",
    "revision": "b01cee80cda750cb7e71ab3f90be9f67"
  },
  {
    "url": "assets/js/39.db6e2f2f.js",
    "revision": "4e805f0b4c1ff165d7d130bbfe86574d"
  },
  {
    "url": "assets/js/4.315f517b.js",
    "revision": "e5aaaa57cb70ffb2e0e92c8506028071"
  },
  {
    "url": "assets/js/40.25c6c5bc.js",
    "revision": "d0a43d9c0d199dc844976fdd3f01e1b7"
  },
  {
    "url": "assets/js/41.3824f9d7.js",
    "revision": "33079f6ba64a02f4b25015fc6adcc400"
  },
  {
    "url": "assets/js/42.15364812.js",
    "revision": "eaa4083792bcb819afb9b1ac69d89055"
  },
  {
    "url": "assets/js/43.18ce8a5e.js",
    "revision": "0adad8954443b73d8dbbd7e32d6f8d5f"
  },
  {
    "url": "assets/js/44.5ffbf507.js",
    "revision": "7911f9a3766f9152094281949bffe195"
  },
  {
    "url": "assets/js/45.e894448c.js",
    "revision": "1486188e37132ebdedfe0c9bab67afc8"
  },
  {
    "url": "assets/js/46.7e1425dc.js",
    "revision": "6c939761eb1ac299fb10e1a964122006"
  },
  {
    "url": "assets/js/47.20fbf167.js",
    "revision": "32a294e30920479f3c2ff5df957520f1"
  },
  {
    "url": "assets/js/5.a1d26af6.js",
    "revision": "a506c32859b3e5ba6e99d0887317a64b"
  },
  {
    "url": "assets/js/6.853edc06.js",
    "revision": "eba786f5148cdcd8347ba269aa0a8dc7"
  },
  {
    "url": "assets/js/7.feb94efe.js",
    "revision": "d61573c928415720aec9be85545ecdd7"
  },
  {
    "url": "assets/js/8.4b68e259.js",
    "revision": "37e21d696ab3c0787ac4a5820190d13d"
  },
  {
    "url": "assets/js/9.1b66a05b.js",
    "revision": "3bee7aa0774023fbab75a2cbe0b1d5de"
  },
  {
    "url": "assets/js/app.be5d72c0.js",
    "revision": "9c3b293acea375a47081ccc8b3c1ccb8"
  },
  {
    "url": "avatar.jpg",
    "revision": "f892c1da47aa24dd5384bdb522e39ae3"
  },
  {
    "url": "categories/Electron/index.html",
    "revision": "1defd2bc0bce389e839d627fda9564ee"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "3c5005e3778c71f5f45b76b2554d14a9"
  },
  {
    "url": "categories/hexo/index.html",
    "revision": "92decbf12c596a588b216806103d3201"
  },
  {
    "url": "categories/index.html",
    "revision": "c14a7ac51fe21d2ee7e80bfe4881423d"
  },
  {
    "url": "categories/其它/index.html",
    "revision": "9119aed8e70f1fc0f6c33e299a9f7421"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1ecd87a6af6ee8d9c05bbc06bf3c770d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "0ab1fc82c9898bf896083de0290ad5c1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8e465511909b7bdd71849b9ac9834f01"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "004fa3abcf456570b9c6a5cd14997f19"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b49511f3d45f4f86438801c56b2b2523"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "live2d/miku/assets/moc/miku.2048/texture_00.png",
    "revision": "f69191e3aa1aa64d66bef43d38bb45e8"
  },
  {
    "url": "tag/index.html",
    "revision": "b968e05d7c0bf640293b27fca0098b71"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "77399ce5d64de9578bbffaf600255ab5"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "bf39ae465e383ce907faac828635b2b2"
  },
  {
    "url": "tags/javaScript/index.html",
    "revision": "536f7e4e21c7a2a194451a1da33e2972"
  },
  {
    "url": "tags/javaScript/page/2/index.html",
    "revision": "c4135e8c23fa9662a7117608b81be05d"
  },
  {
    "url": "tags/JavaScript进阶/index.html",
    "revision": "5d92b1771f0832b9050840cb5f022794"
  },
  {
    "url": "tags/Linux/index.html",
    "revision": "da9d8ce57aac6fce4f4418737367d73a"
  },
  {
    "url": "tags/nodejs/index.html",
    "revision": "b8282608e20b7b52619e672f30b4d05a"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "4ca448576655c73b4a316b066f4ce963"
  },
  {
    "url": "tags/日常错误问题收集/index.html",
    "revision": "007be1ded368437e6d5ff9cdc061fcf3"
  },
  {
    "url": "tags/杂谈/index.html",
    "revision": "63ae9bc13528521bc2d05d41c8942b25"
  },
  {
    "url": "tags/版本控制/index.html",
    "revision": "4e7dd7c7ceff62fe04b1683a98ee1d88"
  },
  {
    "url": "tags/编辑器/index.html",
    "revision": "d16620e215dd5f1436e5229e745c9af5"
  },
  {
    "url": "timeline/index.html",
    "revision": "315253009c88a9593050490412e40a96"
  },
  {
    "url": "views/2020/ChromeConfig.html",
    "revision": "da2ea3c7fabc59a0ac95f5086992c28c"
  },
  {
    "url": "views/2020/Electron-win7-black-screen.html",
    "revision": "cd2386d41f3887b316239281a6723563"
  },
  {
    "url": "views/2020/win下vscode运行bash终端.html",
    "revision": "2824b646670b8d2600a13228ea08f283"
  },
  {
    "url": "views/2020/如何安装多个版本的node.html",
    "revision": "24db2c637342439ff43d4e115811ab10"
  },
  {
    "url": "views/2020/如何自定义切换node源.html",
    "revision": "f0ef4bfb098ebc90fab3f13bb55ec597"
  },
  {
    "url": "views/addRoutes.html",
    "revision": "719285897b49c0da6c0b19bbf4d36d08"
  },
  {
    "url": "views/arguments.html",
    "revision": "182308141bd4e83cab0ee2e5d063a983"
  },
  {
    "url": "views/Array.html",
    "revision": "31142a94d642e18110d0448ce522c90d"
  },
  {
    "url": "views/call、apply的模拟实现.html",
    "revision": "9402c51d3d39a0f0b0879a70aa38be35"
  },
  {
    "url": "views/eventloop.html",
    "revision": "fd2e1c7603cb19fec298db57109dc486"
  },
  {
    "url": "views/Flex布局.html",
    "revision": "05c98455d39aee235b0e69e9595a960c"
  },
  {
    "url": "views/git Please move or remove them before you can merge.html",
    "revision": "12e74330f20f9ef3b7422a258f514db2"
  },
  {
    "url": "views/gitalk搭建遇见的问题.html",
    "revision": "b4815ad227bf2df684cbe9e6c41620a2"
  },
  {
    "url": "views/hexo-next主题集成gitalk评论插件.html",
    "revision": "be120784a5960931f3f582395d2ed861"
  },
  {
    "url": "views/JavaScript继承的多种方式.html",
    "revision": "3edf8f7ddda7ec4fec4137deb80324ad"
  },
  {
    "url": "views/jQuery is not defind.html",
    "revision": "f2477d05cb7053dce99ef1d95292fcf3"
  },
  {
    "url": "views/markdown语法简介.html",
    "revision": "485ac916fff720e6f7fd13b5414d0749"
  },
  {
    "url": "views/nodejs写日志.html",
    "revision": "4db1610d495273024c0ca97f043e6707"
  },
  {
    "url": "views/registerModule.html",
    "revision": "780d7f2e6489822c677f60df41adc25a"
  },
  {
    "url": "views/renderVModel.html",
    "revision": "02e9411dda260a71fded1e8bfc6348a1"
  },
  {
    "url": "views/ShadowSocks配置.html",
    "revision": "97673b9d3bd23394f247514ee80ec10c"
  },
  {
    "url": "views/This.html",
    "revision": "7e1fec0aa6e6eecca3a58dd555ca2f0d"
  },
  {
    "url": "views/vscode插件篇.html",
    "revision": "8fb1ca99cbd0fffe8f3c2943b417c047"
  },
  {
    "url": "views/vue-communication.html",
    "revision": "2f5f31503fb360f1d6bc61f59573f8c6"
  },
  {
    "url": "views/原型和原型链.html",
    "revision": "74acd10b317f523ed9db958f5f292563"
  },
  {
    "url": "views/探索Vue生命周期.html",
    "revision": "96934ad37c7b65ab08c32e54c0b1c454"
  },
  {
    "url": "views/模块规范.html",
    "revision": "6441af910836233c67e2e40410916f7e"
  },
  {
    "url": "views/正则表达式.html",
    "revision": "c8b224e14b2d579859d7fc9dab6e3407"
  },
  {
    "url": "views/深究JavaScript值传递和引用传递.html",
    "revision": "d5ca5e26a11e1836188d8aafc6c0c4a0"
  },
  {
    "url": "views/理解async&await.html",
    "revision": "05f13fb8dbf14c1e45c286e285e54547"
  },
  {
    "url": "views/节流防抖.html",
    "revision": "4dbd02609446094c9513d0e64eafb0af"
  },
  {
    "url": "views/词法作用域、动态作用域、变量提升.html",
    "revision": "57e386634662af3fe33a8ba39ca37b11"
  },
  {
    "url": "views/调用堆栈.html",
    "revision": "a80f89cb43a6c5c3a475627cd29e5e21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
