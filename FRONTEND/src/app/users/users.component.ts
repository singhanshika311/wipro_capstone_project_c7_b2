import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list:any[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.api.listcustomers().subscribe({
      next:resp=>this.list=resp
    })
  }
}
