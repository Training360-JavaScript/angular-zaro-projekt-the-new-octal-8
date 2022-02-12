import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { ProductsComponent } from './page/products/products.component';
import { DatarestructurePipe } from './pipe/datarestructure.pipe';
import { ListingTableComponent } from './common/listing-table/listing-table.component';
import { OrdersComponent } from './page/orders/orders.component';
import { BillsComponent } from './page/bills/bills.component';
import { AddressesComponent } from './page/addresses/addresses.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FilterPipe,
    SorterPipe,
    ProductsComponent,
    DatarestructurePipe,
    ListingTableComponent,
    OrdersComponent,
    BillsComponent,
    AddressesComponent,
    CategoriesComponent,
    CustomersComponent,
    EditBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
