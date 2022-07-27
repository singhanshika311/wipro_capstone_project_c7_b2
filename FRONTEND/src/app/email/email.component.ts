import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    age:null,
    country:'',
    email:''
  };
  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }
  mail(){
    this.https.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
        res => {
          this.dataset = res;
          console.log(this.dataset);
          alert('Email Sent successfully');
          this.dataset.age = null;
          this.dataset.name = '';
          this.dataset.country = '';
          this.dataset.email = '';
        });
  }
}
interface Details{
  name:string;
  age:number;
  country:string;
  email:string;
}

