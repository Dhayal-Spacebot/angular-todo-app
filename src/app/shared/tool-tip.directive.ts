import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  public tippyInstance: any;
  @Input('appToolTip') toolTipContent!: string;

  constructor(private elRef: ElementRef) {

   }
  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement,{
      content: this.toolTipContent
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['toolTipContent'])
    {
      this.updateToolTipChanges();
    }
  }

  updateToolTipChanges(){
    if(this.tippyInstance)
    {
      this.tippyInstance.setContent(this.toolTipContent);
    }
  }

}
