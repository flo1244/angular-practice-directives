import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
//Why are we using Render2?
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //Binding to directive properties making this dynamic instead of static. 
  @Input() defaultColor: string = 'transparent';
  // @Input('appBetterHighlight') defaultColor: string = 'transparent'; can add alias and put it in square brackets instead [appBetterHighlight]='yellow' in html doc.
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  //we can bind to properties of our own directives by simply placing them on the same element,
//these properties I mean, enclosed in square brackets of course.

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  //changes our background to blue
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  //Instead of using renderer we can use @HostBinding decorator. needs to bind this to a property. In HostBinding we can 
  //pass a string defining to which property of the hosting element we want to bind toString. 
  //So with this, what we're telling Angular is on the element this directive sits, please access the style
  //property which pretty much any input has on other directives which access something like the value
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // we set an initial color so we don't get error if we mouse over.
  

  //allows us to listen for a handler method to run when event occurs
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue'
    this.backgroundColor = this.highlightColor;
  }

   @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // this.backgroundColor = 'transparent';
     this.backgroundColor = this.defaultColor;
  }
}
