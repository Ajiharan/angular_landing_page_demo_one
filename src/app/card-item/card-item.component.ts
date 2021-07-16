import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardItemComponent implements OnInit {
  @Input() path: string = '';
  @Input() src: string = '';
  @Input() label: string = '';
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
