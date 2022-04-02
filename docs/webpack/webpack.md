# 优化webpack的loaders和plugins


## 1. plugins

### 1.1 cache属性
打包缓存，webpack5之后替代hard-source-webpack-plugin，
配置cache属性之后，第一次build时间并没有变短，第二次，第三次明显build时间变短

### 1.2 speed-measure-webpack-plugin
控制台会根据插件分析打包速度


### 1.3 webpack-bundle-analyzer
自动打开分析体积页面：http://127.0.0.1:8800/


### 1.4 uglifyjs-webpack-plugin
使用插件，打包之后js的文件会变小



### 1.5 eslint-webpack-plugin
eslint的插件配置
配置下划线警告es报错

```js
    rules: {
    'semi': ["error", "always"], // 配置es下划线报错
    }
```
### 1.6 自定义plugins
文件目录/config/file-list-plugin.js

## 2. loaders

### 2.1 cache-loader
对其他的loader进行缓存，提高速度