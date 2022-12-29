import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import tippy from 'tippy.js';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTipDirective implements AfterViewInit, OnChanges {
  public tippyInstance: any;
  @Input('appToolTip') toolTipContent!: string;

  constructor(
    private elRef: ElementRef,
    public breakpointObserver: BreakpointObserver
  ) {}
  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.toolTipContent,
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toolTipContent']) {
      this.updateToolTipChanges();
    }
  }
  updateToolTipChanges() {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.toolTipContent);
    }
  }
}
