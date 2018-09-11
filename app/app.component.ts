import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NgFor, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';
// Importujemy rzeczy potrzebne do stworzenia formularzy
// FORM_DIRECTIVES - stala zawiera dyrektywy formularza
// FormBuilder - pomocnicza praca ulatwiajaca budowanie formularzy
// Validators - walidacja formularzy
// ControlGroup - grupa kontrolek zbior wszystkich pol w formularzu
// Control - pojedyncze kontrolki
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';


@Component({
    selector: 'articles',
    directives: [ArticleComponent],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
   articles: Article[];

   constructor(private _articleService: ArticleService) {

   }

   getArticles() {
       this._articleService.getArticles().then(articles => this.articles = articles);
    // Z article.service.ts implementacja w komponencie obietnicy
    // Co sie dzieje gdy obietnica nie spelniona / spelniona
    // Anonimowa funkcja
   }

   ngOnInit() {
       this.getArticles();
   }
 
}
// npm start


