import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';


@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
   articles: Article[];
 
}
// npm start


