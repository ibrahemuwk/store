import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-market',
    templateUrl:'./market.component.html'
})
export class MarketComponent  {
   
    constructor() {
        //setTimeout(() => {
        //    this.allowNewServer = true;
        //}, 2000);
        for (let i = 0; i < 28; i++) {
            this.stockPrice[i] = Math.ceil(Math.random() * 100);
        }
        setInterval(() => {
            for (let i = 0; i < 28; i++) {
                this.stockPrice[i] = Math.ceil(Math.random() * 100);
            }
        }, 10000);

        setInterval(() => {
            for (let i = 0; i < 10; i++) {
                this.order = new Order();
                this.stock = this.stockNames[Math.floor(Math.random() * 27)];
                this.order.stockName = this.stock;
                this.order.price = this.stockPrice[this.stockNames.indexOf(this.stock)];
                this.order.quantity = Math.floor(Math.random() * 20)+1;
                this.order.total = this.order.quantity * this.order.price;

                if (this.nameOfCurrentPerson === 'Hema') {
                    this.order.commission = this.order.quantity * this.order.price * .01;
                    this.broker.addToOrders(this.order);
                    //alert(this.broker.orders.length);
                }
                else if (this.nameOfCurrentPerson === 'Ahmed') {
                    this.order.commission = this.order.quantity * this.order.price * .02;
                    this.person1.addToOrders(this.order);
                    //alert(this.person1.orders.length);
                }
                else if (this.nameOfCurrentPerson === 'Mohammed') {
                    this.order.commission = this.order.quantity * this.order.price * .02;
                    this.person2.addToOrders(this.order);
                    //alert(this.person2.orders.length);
                }

            }
        }, 10000);
        this.person1.name = "Ahmed";
        this.person1.Id = 1;
        this.broker.name = "Hema";
        this.broker.Id = 1;
        this.broker.addToPersons(this.person1);
        this.broker.addToPersons(this.person2);
        this.person2.name = "Mohammed";
        this.person2.Id = 2;
    }
    //ngOnInit() {
    //    this.data.currentMessage.subscribe(message => this.message = message)
    //}
    //newMessage() {
    //    this.data.changeMessage("Hello from Sibling")
    //}
    person1 = new Person();
    person2 = new Person();
    broker = new Broker();
    order: Order;
    stock: string;
    name: string;
    quantity: number;
    nameOfCurrentPerson = "Hema";
    allowNewServer = false;
    message: string;
    stockNames = ["Vianet", "Agritek", "Akamai", "Baidu", "Blinkx", "Blucora", "Boingo", "Brainybrawn", "Carbonite", "China Finance", "ChinaCache", "ADR", "ChitrChatr", "Cnova", "Cogent", "Crexendo", "CrowdGather", "EarthLink", "Eastern", "ENDEXX", "Envestnet", "Epazz", "FlashZero", "Genesis", "InterNAP", "MeetMe", "Netease", "Qihoo"];
    stockPrice = new Array(28);
    onClickServer(text: string) {
        this.allowNewServer = true;
        this.name = text;
    }
    onChange(deviceValue) {
        if (deviceValue === 'Brocker : Hema') {
            this.nameOfCurrentPerson = 'Hema';
        }
        else if (deviceValue === 'Person : Ahmed') {
            this.nameOfCurrentPerson = 'Ahmed';

        }
        else if (deviceValue === 'Person : Mohammed') {
            this.nameOfCurrentPerson = 'Mohammed';

        }
    }
    onClickQuantity(quantity: string) {
        if (!isNaN(Number(quantity))) {
            this.quantity = Math.ceil(+quantity)
        }
        else {
            this.quantity = 1;
        }
    }
    onClickBuy() {
        //alert("in buying");
        if (this.quantity == 0 || isNaN(Number(this.quantity))) {
            this.quantity = 1;
        }
        this.order = new Order();
        this.order.stockName = this.name;
        this.order.price = this.stockPrice[this.stockNames.indexOf(this.name)];
        this.order.quantity = this.quantity;
        this.order.total = this.quantity * this.order.price;

        if (this.nameOfCurrentPerson ==='Hema') {
            this.order.commission = this.order.quantity * this.order.price * .01;
            this.broker.addToOrders(this.order);
            //alert(this.broker.orders.length);
        }
        else if (this.nameOfCurrentPerson === 'Ahmed') {
            this.order.commission = this.order.quantity * this.order.price * .02;
            this.person1.addToOrders(this.order);
            //alert(this.person1.orders.length);
        }
        else if (this.nameOfCurrentPerson === 'Mohammed') {
            this.order.commission = this.order.quantity * this.order.price * .02;
            this.person2.addToOrders(this.order);
           // alert(this.person2.orders.length);
        }
        
        
    }

    
}
class Person {
    name: string;
    Id: number;
    orders: Array<Order> = [];
    addToOrders(orderElement: Order) {
        this.orders.push(orderElement);
    }
}
class Broker {
    name: string;
    Id: number;
    orders: Array<Order> = [];
    persons: Array<Person> = [];

    addToOrders(orderElement: Order) {
        this.orders.push(orderElement);
    }
    addToPersons(personElement: Person) {
        this.persons.push(personElement);
    }
}
class Order {
    stockName: string;
    price: number;
    quantity: number;
    commission: number;
    total: number;
}

