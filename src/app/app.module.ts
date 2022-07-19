import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularbasicsTwoComponent } from './angularbasics-two/angularbasics-two.component';
import { DirecivesDemoOneComponent } from './direcives-demo-one/direcives-demo-one.component';
import { NgMyOwnStyleDirective } from './ng-my-own-style.directive';
import { StringtrimmerPipe } from './stringtrimmer.pipe';
import { RemoveSpecialCharsPipe } from './remove-special-chars.pipe';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    AngularBasicsComponent,
    AngularbasicsTwoComponent,
    DirecivesDemoOneComponent,
    NgMyOwnStyleDirective,
    StringtrimmerPipe,
    RemoveSpecialCharsPipe,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
