import {Component} from 'angular2/core';
import {Article} from './article';

@Component({
    selector: 'single-article',
    inputs: ['article'],
    host: {
        class: 'singlearticle'
    },
    templateUrl: 'app/article.component.html'
})

export class ArticleComponent {

}