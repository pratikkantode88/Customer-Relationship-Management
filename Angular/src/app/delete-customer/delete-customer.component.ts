import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent implements OnInit{
  
  msg:string="";
  id:number=0;
  customer:Customer=new Customer();

 constructor(private router:Router,private customerService:CustomerService){}
  ngOnInit(): void {
  }

  delete(){
     console.log(this.id);
     

     this.customerService.getById(this.id).subscribe((data)=>{
      this.customer=data;
      this.msg="Customer Delete Successfully!";
      this.customerService.delete(this.id).subscribe((data)=>{
      console.log(data);
    })
  },
    (error)=>{
    console.log(error);
      this.msg="Customer Not Found!";
    setTimeout(()=>{
      this.router.navigate(["/admin"]);
    },2000)

    });
    setTimeout(()=>{
      this.router.navigate(["/admin"]);
    },2000)
     }
  }

