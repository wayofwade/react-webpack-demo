


### 优化webpack的loader和plugins

#### cache属性
打包缓存，webpack5之后替代hard-source-webpack-plugin，
配置cache属性之后，第一次build时间并没有变短，第二次，第三次明显build时间变短

- speed-measure-webpack-plugin
- - 控制台会根据插件分析打包速度


- webpack-bundle-analyzer
- - 自动打开分析体积页面：http://127.0.0.1:8800/


- uglifyjs-webpack-plugin
- - 使用插件，打包之后js的文件会变小


- cache-loader
- - 对其他的loader进行缓存，提高速度