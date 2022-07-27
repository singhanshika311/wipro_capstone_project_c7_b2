import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
submitted=false;
  fg: FormGroup;
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.fg=this.fb.group({
      'userid':['',Validators.required],
      'name':['',Validators.required],
      'gender':['',Validators.required],
      'city':['',Validators.required],
      'phone':['',Validators.required],
      'pwd':['',Validators.required],
    })
  }

  registeruser(values:any){
    this.submitted=true
    if(this.fg.valid){
      console.log(values)
      this.api.register(values).subscribe({
        next:resp=>{
        console.log(resp)
        this.toast.success('Registered successfully')        
          this._router.navigate(['login'])
        },
      error:err=>{
        console.log(err)
        this.toast.error('Something bad happened',"Registration Failed")
      }
    })
  }
  }
}
