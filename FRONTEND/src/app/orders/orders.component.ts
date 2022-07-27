import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  list:any[]
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.loadData()
  }
  data =[
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },

  
] 
  filedownload(){
    var abcd = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Sales Report',
      useBom: true,
      noDownload: true,
      headers: ["name", "age", "id","descrption"]
    };
   
    new ngxCsv (this.data, "Report " , abcd);
  }
   

    loadData(){
    this.api.allorders().subscribe({
      next:resp=>{
        this.list=resp       
      }
    })
  }
}
