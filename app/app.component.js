System.register(['angular2/core', 'angular2/common', './article', './article.component', './article.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, article_1, article_component_1, article_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_articleService, fb) {
                    this._articleService = _articleService;
                    // dodajemy implementacje z app.component.html tworzac nowy skladnik ktory bedzie przechowywyal aktualnie zaznaczony/wybrany artykul nazywajac go "selectedArticle" i wyznaczamy obiekt Article gdyz na raz bedzie zaznaczony tylko jeden artykul
                    // definujemy kontrolki - pola formularza
                    // w nawiasie konfigurujemy 4 wymagane pola
                    // "" domyslna wartosc - pusta, walidatory:pole wymagane
                    // jeszcze musimy to zaimplementowac w formularzu (po stronie szablonu) bo to nie wystarczy, przechodzimy do app.component.html
                    this.title = new common_1.Control("", common_1.Validators.required);
                    this.link = new common_1.Control("", common_1.Validators.required);
                    this.description = new common_1.Control("", common_1.Validators.required);
                    this.image = new common_1.Control("", common_1.Validators.required);
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
                    });
                }
                AppComponent.prototype.getArticles = function () {
                    var _this = this;
                    this._articleService.getArticles().then(function (articles) { return _this.articles = articles; });
                    // Z article.service.ts implementacja w komponencie obietnicy
                    // Co sie dzieje gdy obietnica nie spelniona / spelniona
                    // Anonimowa funkcja
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getArticles();
                };
                AppComponent.prototype.onSubmit = function () {
                    //    z app.component.html 
                    // co bedzie sie dzialo po klikniecu na przycisk
                    // push - dodawanie nowej wartosci do tablicy
                    // dodajemy nowy artykul
                    // bedzie aktualizowalo zmienna articles
                    this.articles.push(new article_1.Article(this.title.value, this.link.value, this.description.value, this.image.value));
                    // reset pol - aby byly wartosci z pol czyszczone aby nic nie bylo po potwierdzeniu
                    // odwolujemy sie do kontrolek
                    this.title.updateValue("");
                    this.link.updateValue("");
                    this.description.updateValue("");
                    this.image.updateValue("");
                };
                //    dodajemy metode onSelect z app.component.html, przyjmuje parament article i bedzie to obiekt typu Article i ta metoda bedzie wskazywala ze ten aktualny artykul top ten zaznaczony artykul ale teraz strona jest przeladowywana wiec wracamy do app.component.html
                // blokujemy event metoda preventDefault()
                // przechodzimy do app.component.html aby dodac klase odpowiadajaca za wyroznienie article w Semantic UI - frameworku.
                AppComponent.prototype.onSelect = function (article, event) {
                    event.preventDefault();
                    this.selectedArticle = article;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'articles',
                        // dodajemy NgClass i teraz mozemy uzywac klase w app.component.html
                        directives: [article_component_1.ArticleComponent, common_1.FORM_DIRECTIVES, common_1.NgClass],
                        providers: [article_service_1.ArticleService],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService, common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// npm start
//# sourceMappingURL=app.component.js.map