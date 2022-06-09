import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularbasics-two',
  templateUrl: './angularbasics-two.component.html',
  styleUrls: ['./angularbasics-two.component.css']
})
export class AngularbasicsTwoComponent {
 
  test = "";
  evtClick(){
    this.test = "Hello world";
  }
  
  updateTestValue = "";
  aliasevtEmitClick(eventdetails:any){
    this.updateTestValue = eventdetails;
    //console.log("i am in appcomp" ,eventdetails);
  }



  isShow = false;


}
