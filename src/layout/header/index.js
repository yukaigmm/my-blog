define([
    "text!/src/layout/header/index.html"
], function(template){
    return {
        data: function(){
            return {
                name: "header"
            }
        },
        template,
    }
})