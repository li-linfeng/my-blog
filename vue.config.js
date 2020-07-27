
module.exports = {
    devServer: {
        port:8081,
        proxy: {
            '/api': {
                // target: 'http://192.168.2.12',
                // target: 'http://my.blog.com:8000',
                target: 'http://192.168.2.12:8000',
                changeOrigin: true
            },
            '/storage':{
                // target: 'http://192.168.2.12',
                target: 'http://tech.addcn.com',
                changeOrigin: true
            },
            '/socket.io':{
                target: 'http://192.168.2.12:6001',
                changeOrigin: true,
                ws: true
            }
        }

    },
    pwa: {
        name: 'blog',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        iconPaths:{
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
        },

    
        // 配置 workbox 插件
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          // InjectManifest 模式下 swSrc 是必填的。
          swSrc: 'public/sw.js'
          // ...其它 Workbox 选项...
        }
      }

}