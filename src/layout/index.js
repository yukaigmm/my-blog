define([
    "text!./layout.html",
    "/src/layout/header/index.js",
    "/src/layout/content/index.js",
    "/src/layout/menu/index.js",
    "/src/layout/main/index.js"
], function(template, vheader, vcontent, vmenu, vmain) {
    console.log(vheader);
    console.log(template)
    return {
        data:function(){
            return {
                layout: "hahah"
            }
        },
        components: {
            vheader,
            vcontent,
            vmenu,
            vmain
        },
        mounted() {
            console.log(123);
        },
        template,
    }    
});