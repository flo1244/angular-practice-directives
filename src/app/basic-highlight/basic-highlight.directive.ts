import { Directive, ElementRef, OnInit } from "@angular/core";
//creating a basic directive.
@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
        
    }

    //what we are doing here is getting access to the element the directive was placed on getting access
    // to the exact element and then we're overriding the style. 
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}