import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularbasicsTwoComponent } from './angularbasics-two/angularbasics-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    AngularBasicsComponent,
    AngularbasicsTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
