import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  checked= false;
  hamb="☰";

  ngOnInit(): void {
  }

  check(){
    this.checked=!this.checked
    if(this.checked){
      this.hamb="X";
    }else{
      this.hamb="☰";
    }
    console.log(this.checked)
  }

}
