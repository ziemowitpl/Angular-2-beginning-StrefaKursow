System.register(['./article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var article_1;
    var ARTICLES;
    return {
        setters:[
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ARTICLES = [
                new article_1.Article('Semantric UI', 'http://semantic-ui.com', 'Semantic empowers designers and developers by creating a shared vocabulary for UI.', 'http://semantic-ui.com/images/logo.png', 0),
                new article_1.Article('Angular 2', 'https://angular.io/', 'Headers may be oriented to give the hierarchy of a section in the context of the page.', 'resources/images/ang.png', 0),
                new article_1.Article('Co to jest Bower?', 'https://github.com/bower/bower', 'A header provides a short summary of content.', 'http://bower.io/img/bower-logo.png', 0)
            ];
        }
    }
});
//# sourceMappingURL=article-data.js.map