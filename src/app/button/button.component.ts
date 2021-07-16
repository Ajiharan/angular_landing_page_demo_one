import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
  SIZES = ['btn--medium', 'btn--large'];
  @Input() children: string = '';
  @Input() type: string = '';
  @Input() buttonStyle: string = '';
  @Input() buttonSize: string = '';
  checkButtonStyle = '';
  checkButtonSize = '';

  constructor() {}

  ngOnInit(): void {
    this.checkButtonStyle = this.STYLES.includes(this.buttonStyle)
      ? this.buttonStyle
      : this.STYLES[0];
    this.checkButtonSize = this.SIZES.includes(this.buttonSize)
      ? this.buttonSize
      : this.SIZES[0];
  }

  viewButtonClass() {
    return `btn ${this.checkButtonStyle} ${this.checkButtonSize}`;
  }
}
