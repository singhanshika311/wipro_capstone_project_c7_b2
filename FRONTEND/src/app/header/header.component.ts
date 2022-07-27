import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name=sessionStorage.getItem("uname")
  role=sessionStorage.getItem('role')
  
  constructor() { }

  ngOnInit(): void {
  }

}
