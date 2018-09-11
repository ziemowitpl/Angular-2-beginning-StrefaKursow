import {Component} from 'angular2/core';
import {Article} from './article';
import {MultiplyVotesPipe} from './multiply-votes-pipe';
// dodajemy klase wlasnego pipe

@Component({
    selector: 'single-article',
    inputs: ['article'],
    host: {
        class: 'singlearticle'
    },
    templateUrl: 'app/article.component.html',
    pipes: [MultiplyVotesPipe]
    // w dekoratorze Componment okreslamy z jakich pipe bedzie korzystal i dodajemy w nawiasie nazwe klasy
})

export class ArticleComponent {
    article: Article;

    votePlus() : boolean {
        this.article.votePlus();
        return false;
    }

    voteMinus() : boolean {
        this.article.voteMinus();
        return false;
    }
}