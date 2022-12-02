import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display = 'none';
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.open = !this.open

    this.open == true ? this.display = 'flex' : this.display = 'none';

    console.log(this.open)
  }
}
