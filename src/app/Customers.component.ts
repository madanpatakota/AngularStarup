
//@angular/core is the package which gives the meta information about the compoennt

//angular is nothing but combination of the packages

import { Component } from "@angular/core";
// template:"<span>Hello world...</span>",
@Component({
   selector:"app-customer",
   templateUrl: "./Customers.component.html",
   styleUrls:["./Customers.component.css"]
})
export class CustomersComponent{
} 