import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent{
  Location = "HsrLayout";
  Order = "";
  ShipName= "";
  CustomerName="John";

  isValid:boolean = true;


  Id:number =1;

  //either return the value or non return the value.

  getName(){
    var CourseName = "Angular";
    return CourseName;
  }

  evtkeyAction($event:any){
    console.log($event.key);
    //Kind of condition 
    if($event.key == 3){
        alert("Please ignore the 3 value for me..........")
    }
    this.Order = this.Order+$event.key;
    //alert("key is pressed");
  }

  evtBtnClick(message:string){
     alert(message);
  }


  evtCustomerChanged(CName:string){
     if(CName == "John1"){
      this.CustomerName = "John";
       alert("Please do't enter the John1 name for me");
     }
     else{
     this.CustomerName = CName;
     }
  }

}
