import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  submitted=false;
  fg: FormGroup;
  post:any='';
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
   }
 createForm(){
    this.fg=this.fb.group({
      'userid':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }
  ngOnInit(): void {
  }

  validateadmin(values:any){
    this.submitted=true;
    //console.log(this.fg.valid)
    if(this.fg.valid){
      console.log(values)
      this.api.validateadmin(values).subscribe({
        next:resp=>{
        console.log(resp.data)
        this.toast.success('Welcome '+resp.data.uname,"Login Successful")
        sessionStorage.setItem("userid",resp.data.userid)
        sessionStorage.setItem("uname",resp.data.uname)
        sessionStorage.setItem("role","A")
          this._router.navigate(['dashboard'])        
        },
      error:err=>{
        console.log(err)
        this.toast.error('Invalid userid or password',"Login Failed")
      }
    })
  }
  }

}
