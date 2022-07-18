import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgMyOwnStyle]'
})
export class NgMyOwnStyleDirective implements OnInit , OnChanges{

  constructor(public elementRef:ElementRef ,
           public renderer:Renderer2 ) { }

  @Input('myColor') myColor:any;

  ngOnChanges(){
          this.renderer.setStyle(this.elementRef.nativeElement,
          'background-color', this.myColor);
  }

  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'border', '5px solid red');
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement,
      'border', '5px solid black');
  }


  ngOnInit(){
      // console.log(this.elementRef);
      // this.elementRef.nativeElement.
      // style.backgroundColor = this.myColor;
      // console.log(this.myColor);
  }



}
