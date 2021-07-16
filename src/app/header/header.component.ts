import { Component, Host, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isClick: boolean = false;
  isButtonShow: boolean = true;
  isScroll: boolean = false;

  constructor() {
    this.showButton();
  }

  ngOnInit(): void {}

  closeMobileBtn() {
    this.isClick = false;
  }

  handleClick() {
    this.isClick = !this.isClick;
  }

  showButton() {
    if (window.innerWidth <= 960) {
      this.isButtonShow = false;
    } else {
      this.isButtonShow = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.showButton();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (window.scrollY > 100) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
