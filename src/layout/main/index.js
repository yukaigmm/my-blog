define([
    "text!/src/layout/main/index.html"
], function(template){
    return {
        data: function(){
            return {
                name: "main"
            }
        },
        template,
    }
})