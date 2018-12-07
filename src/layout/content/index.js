define([
    "text!/src/layout/content/index.html"
], function(template){
    return {
        data: function(){
            return {
                name: "content"
            }
        },
        template,
    }
})