import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NgFor, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control, NgClass} from 'angular2/common';
// Importujemy rzeczy potrzebne do stworzenia formularzy
// FORM_DIRECTIVES - stala zawiera dyrektywy formularza
// FormBuilder - pomocnicza praca ulatwiajaca budowanie formularzy
// Validators - walidacja formularzy
// ControlGroup - grupa kontrolek zbior wszystkich pol w formularzu
// Control - pojedyncze kontrolki
// NgClass - dyrektywa warunkowego dodania klasy
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';


@Component({
    selector: 'articles',
    // dodajemy NgClass i teraz mozemy uzywac klase w app.component.html
    directives: [ArticleComponent, FORM_DIRECTIVES, NgClass],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
   articles: Article[];
// articleForm powiazany z app.component.html
   articleForm: ControlGroup;
//    tworzymy articleForm i przypisujemy ControlGroup (grupa kontrolek)


    selectedArticle: Article;
    // dodajemy implementacje z app.component.html tworzac nowy skladnik ktory bedzie przechowywyal aktualnie zaznaczony/wybrany artykul nazywajac go "selectedArticle" i wyznaczamy obiekt Article gdyz na raz bedzie zaznaczony tylko jeden artykul



    // definujemy kontrolki - pola formularza
    // w nawiasie konfigurujemy 4 wymagane pola
    // "" domyslna wartosc - pusta, walidatory:pole wymagane
    // jeszcze musimy to zaimplementowac w formularzu (po stronie szablonu) bo to nie wystarczy, przechodzimy do app.component.html
    title: Control = new Control("", Validators.required);
    link: Control = new Control("", Validators.required);
    description: Control = new Control("", Validators.required);
    image: Control = new Control("", Validators.required);

   constructor(private _articleService: ArticleService, fb: FormBuilder) {
    // wstrzykiwanie zaleznosci
    // instancja komponetu, uslugi artykolow fb: FormBuilder
    // grupujemy 4 kontrolki
    // okreslami wlasciwosci tych 4 elementow
    // definicja kontrolek
    this.articleForm = fb.group({
        'title': this.title,
        'link': this.link,
        'description': this.description,
        'image': this.image
    })
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

   onSubmit() {
    //    z app.component.html 
    // co bedzie sie dzialo po klikniecu na przycisk
    // push - dodawanie nowej wartosci do tablicy
    // dodajemy nowy artykul
    // bedzie aktualizowalo zmienna articles
    this.articles.push(new Article(this.title.value, this.link.value, this.description.value, this.image.value));

    // reset pol - aby byly wartosci z pol czyszczone aby nic nie bylo po potwierdzeniu
    // odwolujemy sie do kontrolek
    this.title.updateValue("");
    this.link.updateValue("");
    this.description.updateValue("");
    this.image.updateValue("");
   }


//    dodajemy metode onSelect z app.component.html, przyjmuje parament article i bedzie to obiekt typu Article i ta metoda bedzie wskazywala ze ten aktualny artykul top ten zaznaczony artykul ale teraz strona jest przeladowywana wiec wracamy do app.component.html
// blokujemy event metoda preventDefault()
// przechodzimy do app.component.html aby dodac klase odpowiadajaca za wyroznienie article w Semantic UI - frameworku.
    onSelect(article: Article, event) {
        event.preventDefault();
        this.selectedArticle = article;
    }
}
// npm start


