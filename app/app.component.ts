import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Product} from './product';

@Component({
    selector: 'articles',
    template: `
    <ul>
        <li *ngFor = "#day of days">{{ day }}</li>
    </ul>
    `
})

export class AppComponent {
    days: string[];
    constructor() {
        this.days = ['Poniedziałek','Wtorek','Środa'];
    }
}
// npm start

var product = new Product(123, 'Kurs ABC', 80);
/*
product.id = 1;
product.title = 'Kurs';
product.price = 80;
*/
product.showProduct();