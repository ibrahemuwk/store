import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-order',
    templateUrl:'./order.component.html'
})
export class OrderComponent implements OnInit {

    message: string;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message)
    }

    

}