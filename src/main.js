require.config({
    // baseUrl 只针对paths 的配置有效，在require调用里面不能使用该相对路径
    baseUrl: "/src/pages/",
    // paths 配置必须使用模块的定义名称？ELEMENT只能用ELEMENT,jquery 只能用jquery
    // 
    paths: {
        jquery: "/assets/js/jquery-3.3.1.min",
        vue: "/assets/js/vue-2.5.17.min",
        ELEMENT: "/assets/js/element-ui-2.4.9-min",
        components: "/src/components",
        text: "/assets/js/text",
        layout: "/src/layout"
    },
    shim: {
        "ELEMENT": {
            deps: ["vue"],
            exports: "el"
        }
    }
})
require(["vue","ELEMENT","./layout/index","text"], function(Vue, ELEMENT,layout){
    Vue.use(ELEMENT);
    // console.log(layout)
    new Vue({
        el:"#app",
        data:function() {
            return {
                page: "hello"
            }
        },
        components: {
            layout
        }
    });
})
        