import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderComponent } from './order/order.component';
import { MarketComponent } from './market/market.component';
import { FormsModule } from '@angular/forms';
//import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataService } from "./data.service";



import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, OrderComponent, MarketComponent],
    bootstrap: [AppComponent, OrderComponent, MarketComponent],
    providers: [
        DataService
    ]
})

export class AppModule { }
