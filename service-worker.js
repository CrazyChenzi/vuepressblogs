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
    "url": "404.html",
    "revision": "3dd9439e6d22cc23e3b114ab089647eb"
  },
  {
    "url": "About.html",
    "revision": "e9d8478e6c203edd2d37bd5b2f9c1010"
  },
  {
    "url": "assets/css/0.styles.b27fdf1a.css",
    "revision": "eac0ad24af6e257102896261503579c0"
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
    "url": "assets/js/1.7fe1cd66.js",
    "revision": "4b0e3b31afaaa4a7802f39eaab1eedf0"
  },
  {
    "url": "assets/js/10.d5dab1dd.js",
    "revision": "3964212e329c23ee1abb5938285a659c"
  },
  {
    "url": "assets/js/11.5eb1c5af.js",
    "revision": "a26f5955500f37dd4361adcca91c1a37"
  },
  {
    "url": "assets/js/12.aa2cf95d.js",
    "revision": "fa314d0532d3e4ed6da069746e5f5741"
  },
  {
    "url": "assets/js/13.5889a587.js",
    "revision": "24b89df88bf6e9a5eaca401ac5d09334"
  },
  {
    "url": "assets/js/14.e20efbf4.js",
    "revision": "0449e85f502909498e1f60efde5fbbd2"
  },
  {
    "url": "assets/js/15.488e1fe2.js",
    "revision": "6e623fac2a87a66ba08df890f8826d1e"
  },
  {
    "url": "assets/js/16.19929747.js",
    "revision": "d93f84112a2a7b778223c73fb5e112fc"
  },
  {
    "url": "assets/js/17.4556f6b6.js",
    "revision": "11b39a4b009c497bbb85f0a57717e3a9"
  },
  {
    "url": "assets/js/18.73069746.js",
    "revision": "50600004ec469af7e08ed39eff5c45e7"
  },
  {
    "url": "assets/js/19.6be96e15.js",
    "revision": "b98b0fed53157aab4564e2af4907a5b8"
  },
  {
    "url": "assets/js/20.ea1fb99c.js",
    "revision": "e7f8055a3eb604a79ef5d7276f1e4a99"
  },
  {
    "url": "assets/js/21.8b61c47f.js",
    "revision": "18780746d10d9c9d2ca05e0f9630ea62"
  },
  {
    "url": "assets/js/22.1943dc54.js",
    "revision": "20a7cc79ac7cdbbec75421d11ac5e1f1"
  },
  {
    "url": "assets/js/23.d158b14c.js",
    "revision": "5c9e0887c5ce6c019ddaa6f7cfbbb752"
  },
  {
    "url": "assets/js/24.09a4f673.js",
    "revision": "b0f270180f9976b81bf38be46b0f1565"
  },
  {
    "url": "assets/js/25.d5c33881.js",
    "revision": "e41e0d36cf0ed3136c820f8cb65629ee"
  },
  {
    "url": "assets/js/26.c3a086fe.js",
    "revision": "32abe458b3aba5bdff97732f28fcf271"
  },
  {
    "url": "assets/js/27.82bcd6d2.js",
    "revision": "5b6f5b206b9b81b5a5ca5781a57e3366"
  },
  {
    "url": "assets/js/28.8ba25252.js",
    "revision": "b8da100d485beda2fa1f906c5bf7ee3c"
  },
  {
    "url": "assets/js/29.fa3e7d6d.js",
    "revision": "eb3ca60bf947850dfa0e5869f908e509"
  },
  {
    "url": "assets/js/3.e1585302.js",
    "revision": "5dc8b0973ad50d9ce133c6e2f05545df"
  },
  {
    "url": "assets/js/30.379ebc8b.js",
    "revision": "7697f3e898c52067a5e5d44274d51ef9"
  },
  {
    "url": "assets/js/31.ce7b2ee5.js",
    "revision": "4320e3b7ee143086db956300313a3284"
  },
  {
    "url": "assets/js/32.9c6df1ad.js",
    "revision": "76e8bb591eb3d12b0743ba8ce4b4165f"
  },
  {
    "url": "assets/js/33.faef6ccb.js",
    "revision": "4aaf5835f716e57b6e2e4091422c13e4"
  },
  {
    "url": "assets/js/34.6adb1d9f.js",
    "revision": "af85b3c7b2fad1abe1d438cbfe9bfd77"
  },
  {
    "url": "assets/js/35.3c13522f.js",
    "revision": "76a03a12e91c7ff699e4d49c2714d84f"
  },
  {
    "url": "assets/js/36.88022299.js",
    "revision": "07406d803e03bb9fbb5d95eeba29d2f6"
  },
  {
    "url": "assets/js/37.544233e7.js",
    "revision": "feed3fefaa161d5cf6854e32bcc2a144"
  },
  {
    "url": "assets/js/38.dabcb1d9.js",
    "revision": "deadae203556c2b25f2c6d54cde6188a"
  },
  {
    "url": "assets/js/39.318697cf.js",
    "revision": "923b927fdd4237c89e2a23502ad39f2e"
  },
  {
    "url": "assets/js/4.445cb095.js",
    "revision": "e4c98afe4a1115612d2a759ed204dcc5"
  },
  {
    "url": "assets/js/40.51e08203.js",
    "revision": "ce4021169ac8521e4417c70810f33ee0"
  },
  {
    "url": "assets/js/41.5739cde8.js",
    "revision": "e2a490e22057bba1390c0857cf2f3ed9"
  },
  {
    "url": "assets/js/42.ce1b7425.js",
    "revision": "661006a5ff9f870f60e7ff32700d2b6c"
  },
  {
    "url": "assets/js/43.3274eb49.js",
    "revision": "0e8730925884b0c982be64f6da1675d2"
  },
  {
    "url": "assets/js/44.bb302977.js",
    "revision": "d19213dbd0524bf712eb793e7bc76340"
  },
  {
    "url": "assets/js/45.f3acf479.js",
    "revision": "1acdd1c434459f8a51d98b889234c5cb"
  },
  {
    "url": "assets/js/46.40cabe78.js",
    "revision": "df13df1cda6072da6707b96f65271df5"
  },
  {
    "url": "assets/js/47.2092329b.js",
    "revision": "121a2b476a503cdcea189dc41c6a65ef"
  },
  {
    "url": "assets/js/48.a937191c.js",
    "revision": "aa14f21a5df01be431787cae45fed89d"
  },
  {
    "url": "assets/js/49.ae6e74ea.js",
    "revision": "00b1d460d73e23525ff9abae481d5c11"
  },
  {
    "url": "assets/js/5.aa472f00.js",
    "revision": "1625427f1cd9434498e6b8eead6657b9"
  },
  {
    "url": "assets/js/50.2a9765f5.js",
    "revision": "833ba147d7e6673b73ce68b61f56c7f0"
  },
  {
    "url": "assets/js/51.87d33a5b.js",
    "revision": "ec66c5a1ffcd84a5eced5f2b58982055"
  },
  {
    "url": "assets/js/52.d73f95fd.js",
    "revision": "144a0b67d1ccfe2d199a5e85015c0aec"
  },
  {
    "url": "assets/js/53.8f5a96de.js",
    "revision": "4455c39f422b52f068d758ba10c13335"
  },
  {
    "url": "assets/js/54.3985853d.js",
    "revision": "f2de2698eca5c3cbf4f9bc7607842a4d"
  },
  {
    "url": "assets/js/55.85d77007.js",
    "revision": "3a0c1856807920db681c8c7835f0c09f"
  },
  {
    "url": "assets/js/56.11f94084.js",
    "revision": "d2f795d08a28a5e1b2c0385639f34f3e"
  },
  {
    "url": "assets/js/6.32ac5d9f.js",
    "revision": "f3f3caf275f320c7dc6af23c55919bbc"
  },
  {
    "url": "assets/js/7.47532e3f.js",
    "revision": "471ce6921ad880d488ce50466ea5cc3d"
  },
  {
    "url": "assets/js/8.0ca9806a.js",
    "revision": "adb6d9b93e0ac9ae01e86da0417c7755"
  },
  {
    "url": "assets/js/9.700a2e23.js",
    "revision": "1a8257d5278e280eb8dac2a67553b334"
  },
  {
    "url": "assets/js/app.ed11a620.js",
    "revision": "8ab338aef1ba8f01156be6c4e21c53c2"
  },
  {
    "url": "avatar.jpg",
    "revision": "f892c1da47aa24dd5384bdb522e39ae3"
  },
  {
    "url": "categories/Electron/index.html",
    "revision": "34469e829e2f86610fc13cb70b3ff263"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "603ec077405b9cd04095c6559bfdf41f"
  },
  {
    "url": "categories/hexo/index.html",
    "revision": "0a99f5c18f3266b85141281c044e225a"
  },
  {
    "url": "categories/index.html",
    "revision": "c3b1ef7bdaba4a0062f2d504c0d68e63"
  },
  {
    "url": "categories/Learning/index.html",
    "revision": "250e487db87c87c47c7ed16d264fe61f"
  },
  {
    "url": "categories/Nodejs/index.html",
    "revision": "af90825b3116ed20d141b2385c5bec09"
  },
  {
    "url": "categories/其它/index.html",
    "revision": "086c874ac95ada4103ceeac74935f99a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a83678e96c1918b73ba805e31fe6c584"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "8a255b947df693d8982a0199847f92e2"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "f4be978fbe514001c7ddc5c839ab2db0"
  },
  {
    "url": "categories/杂谈/index.html",
    "revision": "685cd3a04b40f2feb08fc49c53f20452"
  },
  {
    "url": "categories/移动端/index.html",
    "revision": "1950b8291bdb4707d7a7a1d65c0253b3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "9eb027e7bf8f0f0eb4fa499e2b9e13a4"
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
    "url": "tag/CSS/index.html",
    "revision": "527f5fef12f6028ca500cd5ec1cb0d94"
  },
  {
    "url": "tag/Dart/index.html",
    "revision": "7c445730bd68f8011f8a5bd338c7c6ff"
  },
  {
    "url": "tag/Electron/index.html",
    "revision": "c2c348708ad7e1ac7f748ad5a4562c3b"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "79d20d3be8e6ecceab0778ffef84271c"
  },
  {
    "url": "tag/Flutter/index.html",
    "revision": "5d981be12fb37576cb4914e2a84a762f"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "3c50e8a80d9a148c4b8f6fa50751287a"
  },
  {
    "url": "tag/index.html",
    "revision": "509a6ee73c68f18b876468c209e7b105"
  },
  {
    "url": "tag/javaScript/index.html",
    "revision": "8ff74016b911eb96375e2eccc02634ac"
  },
  {
    "url": "tag/javaScript/page/2/index.html",
    "revision": "1e6e293947288da33103b1b4fb97d51b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "d94e3836e7ff8473961edf9d16caf2aa"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "72aa14f97efe7ab3f4953a7891de4d1b"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "07ecfda1a2f1a288435f4339dd95e5cc"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9278788664febc2755623928cac4f842"
  },
  {
    "url": "tag/日常错误问题收集/index.html",
    "revision": "b06875e782753291976007d1598135a0"
  },
  {
    "url": "tag/杂谈/index.html",
    "revision": "74d11a20781433df2ba6856b61a6e944"
  },
  {
    "url": "tag/编辑器/index.html",
    "revision": "635c56805e4c641b75fcc60b05231f93"
  },
  {
    "url": "timeline/index.html",
    "revision": "13bd22cbe7d05e11e83b651c94c4ae4f"
  },
  {
    "url": "views/2020/Chocolatey.html",
    "revision": "71fabfd1bf2b48f6293a6eee73efe53f"
  },
  {
    "url": "views/2020/ChromeConfig.html",
    "revision": "c74b3674feb6b324fa1c89ce8c4e56cb"
  },
  {
    "url": "views/2020/Electron-win7-black-screen.html",
    "revision": "0877a9f8b0a965d480b755f0f2764cca"
  },
  {
    "url": "views/2020/Electron学习笔记.html",
    "revision": "5b5bcc16da320b8112146d5f3dfc020d"
  },
  {
    "url": "views/2020/Front.specification.html",
    "revision": "461331e274e7c5a4c564c7b90aa49816"
  },
  {
    "url": "views/2020/gitignore.html",
    "revision": "a85813e8d630866d06c4c7c43b457d7f"
  },
  {
    "url": "views/2020/img.html",
    "revision": "0e4fb7fa69dbc3c98d908fe3853e5ea6"
  },
  {
    "url": "views/2020/jsonstringify.html",
    "revision": "672fee8996e57c16991096d552bdbbaa"
  },
  {
    "url": "views/2020/koabodyparser.html",
    "revision": "6a09e869af1fe2f166dd03dde70b442f"
  },
  {
    "url": "views/2020/learnDartLanguage.html",
    "revision": "782e1059f4ca767ec8c81c7a9725fd3e"
  },
  {
    "url": "views/2020/TypeScript.html",
    "revision": "74993d902b61317ee6acaf8bc05ad264"
  },
  {
    "url": "views/2020/WindowTerminal.html",
    "revision": "726962e1a2edb1701b6f55d9d4c1f564"
  },
  {
    "url": "views/2020/win下vscode运行bash终端.html",
    "revision": "d213f91bb9727ffdae45934ea4124117"
  },
  {
    "url": "views/2020/如何安装多个版本的node.html",
    "revision": "69ae1e41d1990932c63d9bc42580521a"
  },
  {
    "url": "views/2020/如何自定义切换node源.html",
    "revision": "b01244ad9463ac2ca4e660536a62dff9"
  },
  {
    "url": "views/previous/addRoutes.html",
    "revision": "cefc9a0833aa3fda29f7244dd3351635"
  },
  {
    "url": "views/previous/arguments.html",
    "revision": "2e88386abe108658d4a17bb13973ba0f"
  },
  {
    "url": "views/previous/Array.html",
    "revision": "6cf3b6ef8ea38eefa1519edd093353af"
  },
  {
    "url": "views/previous/call、apply的模拟实现.html",
    "revision": "0b37b3935a71e6d84b1df399d31c7b8f"
  },
  {
    "url": "views/previous/eventloop.html",
    "revision": "691bba7c3721aeaa6dc6267af6a600bc"
  },
  {
    "url": "views/previous/Flex布局.html",
    "revision": "f6a80f605beb41c57c389ef6a45a3d2a"
  },
  {
    "url": "views/previous/git Please move or remove them before you can merge.html",
    "revision": "b7dfd74aaba4b9a0676fa6ab43a2328d"
  },
  {
    "url": "views/previous/gitalk搭建遇见的问题.html",
    "revision": "20f08e53be24ba64a2298506898760e2"
  },
  {
    "url": "views/previous/hexo-next主题集成gitalk评论插件.html",
    "revision": "ed117a6b6adfef4cfd4875364df95c46"
  },
  {
    "url": "views/previous/JavaScript继承的多种方式.html",
    "revision": "2009d812f48ac99abf3177daa4d5a4f8"
  },
  {
    "url": "views/previous/jQuery is not defind.html",
    "revision": "cdfdab0a11a94f440f227b7ef6725064"
  },
  {
    "url": "views/previous/markdown语法简介.html",
    "revision": "fa8fd8cbbee1482d4a6a7ea1cfbd1858"
  },
  {
    "url": "views/previous/nodejs写日志.html",
    "revision": "d0b8c9c57d651b9d878f33ffd22d13ea"
  },
  {
    "url": "views/previous/registerModule.html",
    "revision": "68b0a5b8f9d9dc15bbda87d20e8141de"
  },
  {
    "url": "views/previous/renderVModel.html",
    "revision": "b95ab447c0e97e6e784af0c272cdb3cb"
  },
  {
    "url": "views/previous/ShadowSocks配置.html",
    "revision": "fb8f03aa5132351a43831d8c15b8ecdb"
  },
  {
    "url": "views/previous/This.html",
    "revision": "ecdfc9300c7d1ae03a92180e8c304ff2"
  },
  {
    "url": "views/previous/vscode插件篇.html",
    "revision": "14359878aa283ef9f60eaef693bf0494"
  },
  {
    "url": "views/previous/vue-communication.html",
    "revision": "79ad3d931246488732d39915f2f1dd52"
  },
  {
    "url": "views/previous/原型和原型链.html",
    "revision": "eec0ab72d4f396aef689d57c7efa380d"
  },
  {
    "url": "views/previous/探索Vue生命周期.html",
    "revision": "dc807597a1a10a7cb2df21cfd9f80ce3"
  },
  {
    "url": "views/previous/模块规范.html",
    "revision": "a1d902aaffd5331cda62cbe283d9789b"
  },
  {
    "url": "views/previous/正则表达式.html",
    "revision": "b26acdd232022ac50a65d2adee798736"
  },
  {
    "url": "views/previous/深究JavaScript值传递和引用传递.html",
    "revision": "21193b21ace7c9b03a80fd0b7ea0ac61"
  },
  {
    "url": "views/previous/理解async&await.html",
    "revision": "c13007cb04cd3f43b4b250656f039acf"
  },
  {
    "url": "views/previous/节流防抖.html",
    "revision": "47c25bae19a18a94b808a88cc9320034"
  },
  {
    "url": "views/previous/词法作用域、动态作用域、变量提升.html",
    "revision": "2ba34a0d508baba7b07eacdad7980eea"
  },
  {
    "url": "views/previous/调用堆栈.html",
    "revision": "17cad85c9a623aa025d854a0ea9286d0"
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
