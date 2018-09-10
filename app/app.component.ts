import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';


@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
   
}
// npm start

var ARTICLES: Article[] = [
    new Article('Semantric UI', 'http://semantic-ui.com', 'Semantic empowers designers and developers by creating a shared vocabulary for UI.', 'http://semantic-ui.com/images/logo.png', 0),
    new Article('Angular 2', 'https://angular.io/', 'Headers may be oriented to give the hierarchy of a section in the context of the page.', 'resources/images/ang.png', 0),
    new Article('Co to jest Bower?', 'https://github.com/bower/bower', 'A header provides a short summary of content.', 'http://bower.io/img/bower-logo.png', 0)
];

