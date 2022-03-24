


### 优化webpack的loader和plugins

- 控制台会根据插件speed-measure-webpack-plugin分析打包速度
- 自动打开分析体积页面：http://127.0.0.1:8800/
- 使用插件uglifyjs-webpack-plugin，打包之后js的文件会变小
- cache-loader，对其他的loader进行缓存，提高速度