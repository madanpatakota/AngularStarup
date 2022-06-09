import {
  Component, ContentChild, ElementRef, EventEmitter, Output, SimpleChanges, ViewChild,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
}
  from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

  //how many life cycle phases of the component...

  //human being having the different life cycle



  // string interpolation ngif ngfor ngstyle ngclass attributebinding eventbinding twowaybinding
  // custompropertybinding customeventbinding
  // viewchild localref contentchild ngcontent

  @Input() xyz: any;
  //for passing the Helloworld123 to the appcompoent
  @Output() evtemitUpdate = new EventEmitter<any>();
  @ViewChild('textInput') _reftextInput: any;
  @ViewChild("paragraph") paragraph: any;

  @ViewChild("localRefCustomer") _localRefCustomer: any;
  @ContentChild("customerID") _contentRefcustomerID:any;

  //@ContentChild()
  //s:string = "adsfasdasdas";
  // lifecyclehooks

  textValue = "";
  //we can manage inputting the data from the parent component....
  ngOnChanges(changes: SimpleChanges): void {
    this.textValue = this.xyz;
    if (this.textValue === "Hello world") {
      this.textValue = "My world";
    }
  }

  //routing......
  //component and ngoninit are loading same time
  ngOnInit(): void {
     //console.log("from the content",this._contentRefcustomerID.nativeElement.value);
    //when ever my component is loading then i have to take this event.,,,
    //console.log(this.paragraph);
    //this.render.setStyle(this.paragraph,"background-color","red");
    console.log("Component is loading");
    //console.log("paragraph element", this._localRefCustomer.nativeElement);
    //this.samplefunction(); 
  }

  ngDoCheck(): void {
    console.log("ngDocheck changes");
  }


  ngAfterContentInit(): void {
    console.log("from the content",this._contentRefcustomerID.nativeElement.value);
    console.log("ngAfterContentInit has loaded");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked checked has loaded")
  }
  
  //once my component has loaded i want to do some action...
  ngAfterViewInit(): void {
    //console.log("paragraph element", this._localRefCustomer.nativeElement);
    console.log("after view init loaded");
  }

  ngAfterViewChecked() {
    console.log("after view checked loaded");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy has loaded");
  }








  //send the data or emitting the data pass the data
  //once event trigger 
  // evtUpdate(inputRef: HTMLInputElement) {
  // this.evtemitUpdate.emit(inputRef.value);
  // console.log(inputRef.value);
  // }

  evtUpdate() {
    console.log(this._reftextInput.nativeElement.value);
    this.evtemitUpdate.emit(this._reftextInput.nativeElement.value);
    //console.log(inputRef.value);
  }


}
