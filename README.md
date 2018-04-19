# dsp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
项目总结思路

    智能投放系统

        首页  新建广告   广告管理   数据中心   工具箱  还有登录页
       
    1、 这个项目脚手架用的是vue-cli  element-ui echarts axios less es6

    其实做后台管理也可以用react-cli ,它们的相似之处就是虚拟dom，而vue可以更快地计算出

    Virtual DOM的差异，而对于React而言，每当应用的状态被改变时，全部子组件都会重新渲染。当

    然，这可以通过shouldComponentUpdate这个生命周期方法来进行控制，但Vue将此视为默认的优化

    2、路由的搭建用的是vue-router,一级路由是登录页和根路由，根路由下有首页、新建广告、广告管

    理、数据中心、工具箱。

     登录页,进入登陆页输入邮箱和密码，根据账号判断权限，判断不同的页面，如果登录成功后台返
 
    回token字段，保存在浏览器中，设置路由守卫判断token字段是否存在，存在则跳入首页，否则
       
    跳入登录页
       
    3、数据请求

        封装了axios =>  基于http的数据库运用axios.create()

        设置了请求头以及默认的url路径

        请求拦截器 instance.interceptors.request.use(function (config)

        响应拦截器 instance.interceptors.response.use(function (response)

        将axios挂载在vue原型实例上

        export各个模块的接口

    4、项目中的核心功能

        首页 => 首先判断是否登录，如果没有登录返回登陆页 ，运用到了布局容器、select选择器、
        
        日历，还用到了echarts图表，图标数据是向后台请求的数据，根据点击日历时，把相应的数据传
        
        给后台，返回给图表数据，然后渲染到页面上

        echarts用法  => 根据文档里面的提供的实例，选择合适的展示图形，复制左边提供的代码段，
        
        拷贝到项目页面加载的js中     this.$echarts.init(元素).setOption(数据)

        广告管理 =>  广告计划、广告单元、广告创意 

            跳转路由请求相对应的接口渲染页面

        新建广告 =>  建立广告计划、广告单元、广告创意

            广告创意：添加创意  手动封装file 运用forData()函数获取到file上传数据

    5、数据管理

        用户在组件中的输入操作触发 action 调用

        Actions 通过分发 mutations 来修改 store 实例的状态

        Store 实例的状态变化反过来又通过 getters 被组件获知

    6、在做日历的时候遇到的困难 运用element-ui的日期选择器达不到想要的效果，然后就自己封装了
    
    一个，然后把要获取到的数据给提取出来，发送给后台，后台根据数据发送给图表，然后渲染到了页面
    
    上

       在添加创意的时候tab切换不能实现效果，自己封装了一个组件



