import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  list:any[]
  constructor(private api:ApiService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.loadData()
  }

  removefromwishlist(id:number){
    this.api.deletefromwishlist(id).subscribe({
      next:resp=>{
        this.toast.success('Item deleted from wishlist')
        this.loadData()
      }
    })
  }

  loadData(){
    this.api.getwishlist(sessionStorage.getItem('id')).subscribe({
      next:resp=>this.list=resp
    })
  }
}
