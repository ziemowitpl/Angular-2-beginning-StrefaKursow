import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';


@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
   articles: Article[];

   constructor(private _articleService: ArticleService) {

   }

   getArticles() {
       this.articles = this._articleService.getArticles();
   }
 
}
// npm start


