export class Product {
    id: number;
    title: string;
    price: number;

    constructor(id: number, title: string, price: number) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    showProduct() {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
    }
}