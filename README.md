## angularSeed https://img.shields.io/badge/node-v7.8.0-green.svg
   
## 技术栈 (technology)

```
angular1.6+webpack+es6 
```

## 文件结构 (File structure)


```
├── webpack                     构建服务和webpack配置
├── dist                        项目build目录
├── index.html                  项目入口文件
├── app.js                      ng依赖注入
├── set.js                      快速生成组件脚本
├── webpack.config.js           webpack
├── .eslintrc.js                eslint配置文件
├── package.json                项目配置文件
├── src                         生产目录
    |—— assets                  静态资源
    |——|—— css                  全局样式    
    |——|—— images               图片
    |—— commonComponents        公共组件
    |—— components              页面组件
    |——|—— login                登录页组件    
    |—— config                  配置http访问ip
    |—— server                  公用服务
```



## 项目运行(Probject running)

1.克隆项目到本地 : git clone https://github.com/jiwenjiang/angularSeed.git 

2.安装依赖环境 : npm install      

3.启动项目 : npm run start        

4.打包项目 : npm run build


## 快速生成组件
运行命令：node set foo
会在conponents文件下，生成foo文件夹，并生成foo.html,foo.less,foo.js,index.js等四个文件，并自动填充部分通用代码。

## 2017/07/19 提交修改
新增windows用户下，获取c盘用户名，自动填充为index.js等文件的作者的功能（不是开机登录名），即c:users\xxx中的xxx。
修改c盘文件夹名称方法请参考：http://blog.csdn.net/j_bleach/article/details/75449161

## 2017/07/20 提交修改
更该项目目录，将css,image重新划分至assets
