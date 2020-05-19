module.exports = {
  title: "Black_Chen'Blog",
  description: "不能因理想遥远而放弃追求 不能因现实复杂而放弃梦想",
  base: "/", // 这是部署到github相关的配置 下面会讲
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/TimeLine/", icon: "reco-date" },
      { text: "About", link: "/About.html", icon: "reco-account" },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "Github",
            link: "https://github.com/blacklisten",
            icon: "reco-github"
          }
        ]
      }
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Categorys"
      },
      tag: {
        location: 3,
        text: "Tags"
      }
    },
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "blacklisten",
    authorAvatar: "/avatar.jpg",
    // "record": "xxxx",
    startYear: "2018",
    vssueConfig: {
      platform: "github",
      owner: "blacklisten",
      repo: "vuepressblogs",
      clientId: "62731e14a44db4625efe",
      clientSecret: "8d9dd74aa3d13f0fa7d8a20eaa225d425878e0e8"
    },
    noFoundPageByTencent: true
  },
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  plugins: [
    // 悬挂小猫返回顶部
    ["go-top"],
    // 彩带背景
    [
      "ribbon",
      {
        size: 50,
        opacity: 0.8,
        zIndex: -1
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      "cursor-effects",
      {
        shape: "star"  // shape of the particle, default: 'star'
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'miku',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
    // 禁用无用插件
    ["@vuepress-reco/back-to-top", false]
  ]
}