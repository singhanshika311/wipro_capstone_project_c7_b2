import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  fg:FormGroup;
  model:any={}
  cats:any[]
  list:any[]
  filePath="../assets/upload.png"
  image:any
  submitted=false;
  upload=false;
  constructor(private api:ApiService,
    private fb:FormBuilder,
    private toast:ToastrService,
    private router:Router){}
  
  onSubmit(){
      this.router.navigate(['products/Bulkupload']);
    }
  sendmail(){
      this.router.navigate(['products/eemail']);
    }

  ngOnInit(): void {
    this.createForm()
    this.loadData()
  }

  loadData(){
    this.api.listcategories().subscribe({
      next:resp=>this.cats=resp
    })
    this.api.listproducts().subscribe({
      next:resp=>{
        this.list=resp;
      }
    })
  }

  createForm(){
     this.fg=this.fb.group({
      'pname':['',Validators.required],
      'category':['',Validators.required],
      'descr':['',Validators.required],
      'price':['',Validators.required],
      'pic':['',Validators.required],
      'id':['0',Validators.required],
    })
  }

  saveFile(e:any){
    const ele=(e.target as HTMLInputElement)
    const file=ele.files?.item(0)
    console.log(file)
    this.image=file
    this.upload=true;
    const reader=new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onload=()=>{
      this.filePath=reader.result as string
      //this.fg.patchValue({pic:reader.result})
    }
  }

  deleteProduct(id:number){
    this.api.deleteproduct(id).subscribe({
      next:_resp=>{
        this.toast.success('Product deleted')
        this.loadData()
      },
      error:_err=>this.toast.error('Product cannot delete')
    })
  }

  saveproduct(f:any){  
    this.submitted=true;
    this.fg.get('id').setValue('0')
    if(this.fg.valid && this.upload){
      console.log("Valid",this.fg.valid)
      let fd=new FormData()
      
      console.log(f)
    for(let ele in this.fg.value){
      console.log(ele)
      fd.append(ele,(<any>this.fg.get(ele).value))
    }
    fd.append("pic",this.image)    
    
    
      this.api.saveproduct(fd).subscribe({
        next:_resp=>{              
        this.toast.success("Product saved successfully")      
        this.fg.reset()
        this.submitted=false;
        //this.filePath="../assets/upload.png"   
        this.loadData()
        },
        error:err=>console.log(err.error)
      });
    }
  }

}
