const path = require("path");
module.exports = {
	// 基本路径
	publicPath: './',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 服务器端口号
    devServer: {
        port: 8080,
        proxy: {
			'/extract_data': {
				target: 'http://127.0.0.1:14453/extract_data', // 域名
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					"^/extract_data": ""
				}
			},
			'/extract_image': {
				target: 'http://127.0.0.1:14453/extract_image', // 域名
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					"^/extract_image": ""
				}
			},
			'/encode': {
				target: 'http://127.0.0.1:14453/encode', // 域名
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					"^/encode": ""
				}
			},
			'/decode': {
				target: 'http://127.0.0.1:14453/decode', // 域名
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					"^/decode": ""
				}
			},
			'/qrcode': {
				target: 'http://127.0.0.1:14453/qrcode', // 域名
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				pathRewrite: {
					"^/qrcode": ""
				}
			}
		}
    },
  	pluginOptions: {
    	'style-resources-loader': {
      		preProcessor: 'less',
      		patterns: [path.resolve(__dirname, "src/assets/less/global.less")]
   	 	}
	},
	configureWebpack: {
	    resolve: {
		    alias: {
		      'vue$': 'vue/dist/vue.common.js' // 在 webpack 1 中使用 'vue/dist/vue.common.js'
		    }
		}
	}
}
