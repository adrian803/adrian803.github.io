module.exports = {
    base: '/blog/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！
    title: '菜鸡林某の blog',
    description: '菜鸡林某の blog',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '菜鸡林某の blog', 
                items: [
                    { text: 'Github', link: 'https://github.com/adrian803' },
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 是否折叠
                children: [
                    { title: "博客介绍", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/1',
              collapsable: false, // 是否折叠
              children: [
                { title: "博客搭建", path: "/handbook/1" },
                { title: "博客搭建", path: "/handbook/2" }
              ],
            }
          ]
    }
}