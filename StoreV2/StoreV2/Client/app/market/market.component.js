"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MarketComponent = (function () {
    function MarketComponent() {
        var _this = this;
        //ngOnInit() {
        //    this.data.currentMessage.subscribe(message => this.message = message)
        //}
        //newMessage() {
        //    this.data.changeMessage("Hello from Sibling")
        //}
        this.person1 = new Person();
        this.person2 = new Person();
        this.broker = new Broker();
        this.nameOfCurrentPerson = "Hema";
        this.allowNewServer = false;
        this.stockNames = ["Vianet", "Agritek", "Akamai", "Baidu", "Blinkx", "Blucora", "Boingo", "Brainybrawn", "Carbonite", "China Finance", "ChinaCache", "ADR", "ChitrChatr", "Cnova", "Cogent", "Crexendo", "CrowdGather", "EarthLink", "Eastern", "ENDEXX", "Envestnet", "Epazz", "FlashZero", "Genesis", "InterNAP", "MeetMe", "Netease", "Qihoo"];
        this.stockPrice = new Array(28);
        //setTimeout(() => {
        //    this.allowNewServer = true;
        //}, 2000);
        for (var i = 0; i < 28; i++) {
            this.stockPrice[i] = Math.ceil(Math.random() * 100);
        }
        setInterval(function () {
            for (var i = 0; i < 28; i++) {
                _this.stockPrice[i] = Math.ceil(Math.random() * 100);
            }
        }, 10000);
        setInterval(function () {
            for (var i = 0; i < 10; i++) {
                _this.order = new Order();
                _this.stock = _this.stockNames[Math.floor(Math.random() * 27)];
                _this.order.stockName = _this.stock;
                _this.order.price = _this.stockPrice[_this.stockNames.indexOf(_this.stock)];
                _this.order.quantity = Math.floor(Math.random() * 20) + 1;
                _this.order.total = _this.order.quantity * _this.order.price;
                if (_this.nameOfCurrentPerson === 'Hema') {
                    _this.order.commission = _this.order.quantity * _this.order.price * .01;
                    _this.broker.addToOrders(_this.order);
                    //alert(this.broker.orders.length);
                }
                else if (_this.nameOfCurrentPerson === 'Ahmed') {
                    _this.order.commission = _this.order.quantity * _this.order.price * .02;
                    _this.person1.addToOrders(_this.order);
                    //alert(this.person1.orders.length);
                }
                else if (_this.nameOfCurrentPerson === 'Mohammed') {
                    _this.order.commission = _this.order.quantity * _this.order.price * .02;
                    _this.person2.addToOrders(_this.order);
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
    MarketComponent.prototype.onClickServer = function (text) {
        this.allowNewServer = true;
        this.name = text;
    };
    MarketComponent.prototype.onChange = function (deviceValue) {
        if (deviceValue === 'Brocker : Hema') {
            this.nameOfCurrentPerson = 'Hema';
        }
        else if (deviceValue === 'Person : Ahmed') {
            this.nameOfCurrentPerson = 'Ahmed';
        }
        else if (deviceValue === 'Person : Mohammed') {
            this.nameOfCurrentPerson = 'Mohammed';
        }
    };
    MarketComponent.prototype.onClickQuantity = function (quantity) {
        if (!isNaN(Number(quantity))) {
            this.quantity = Math.ceil(+quantity);
        }
        else {
            this.quantity = 1;
        }
    };
    MarketComponent.prototype.onClickBuy = function () {
        //alert("in buying");
        if (this.quantity == 0 || isNaN(Number(this.quantity))) {
            this.quantity = 1;
        }
        this.order = new Order();
        this.order.stockName = this.name;
        this.order.price = this.stockPrice[this.stockNames.indexOf(this.name)];
        this.order.quantity = this.quantity;
        this.order.total = this.quantity * this.order.price;
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
            // alert(this.person2.orders.length);
        }
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    core_1.Component({
        selector: 'app-market',
        templateUrl: './market.component.html'
    }),
    __metadata("design:paramtypes", [])
], MarketComponent);
exports.MarketComponent = MarketComponent;
var Person = (function () {
    function Person() {
        this.orders = [];
    }
    Person.prototype.addToOrders = function (orderElement) {
        this.orders.push(orderElement);
    };
    return Person;
}());
var Broker = (function () {
    function Broker() {
        this.orders = [];
        this.persons = [];
    }
    Broker.prototype.addToOrders = function (orderElement) {
        this.orders.push(orderElement);
    };
    Broker.prototype.addToPersons = function (personElement) {
        this.persons.push(personElement);
    };
    return Broker;
}());
var Order = (function () {
    function Order() {
    }
    return Order;
}());
//# sourceMappingURL=market.component.js.map