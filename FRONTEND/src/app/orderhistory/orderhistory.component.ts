import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

   list:any[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.loadData()
  }
  

   loadData(){
    this.api.orderhistory(sessionStorage.getItem('id')).subscribe({
      next:resp=>{
        this.list=resp       
      }
    })
  }
}
