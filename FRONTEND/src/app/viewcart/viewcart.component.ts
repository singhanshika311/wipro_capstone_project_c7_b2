import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  total:number=0;
  list:any[]
  constructor(private api:ApiService,private toast:ToastrService,
    private route:Router) { }

  ngOnInit(): void {
    this.loadData()
  }

  removefromwishlist(id:number){
    this.api.deletefromcart(id).subscribe({
      next:resp=>{
        this.toast.success('Item deleted from cart')
        this.loadData()
      }
    })
  }

  placeorder(values:any){
    this.api.placeorder({customerid:sessionStorage.getItem('id')}).subscribe({
      next:resp=>{
        this.toast.success('Order placed successfully')
        this.route.navigate(['/history'])
      },
      error:err=>console.log(err)
    })
  }

  updateqty(cartid:number,qty:number){
    if(qty==0)
      this.toast.error('Cannot reduce quantity')
    else{
      this.api.updateqty(cartid,qty).subscribe({
        next:resp=>{
          this.toast.success('Quantity updated')
          this.loadData()
        },
        error:err=>console.log("error")
      });
    }
  }

  loadData(){
    this.api.getcart(sessionStorage.getItem('id')).subscribe({
      next:resp=>{
        this.list=resp
        this.total=resp.reduce((sum,x)=>sum+x.qty*x.product.price,0)
      }
    })
  }

}
