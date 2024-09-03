import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {

  id:number=0;
  msg:string="";
  customer:Customer=new Customer();
  constructor(private customerService:CustomerService,
              private router:Router){}

  getById(){
     console.log(this.id);
     this.customerService.getById(this.id).subscribe((data)=>{
      console.log(data);
      this.customer=data;
      setTimeout(()=>{
        this.router.navigate(["/admin"]);
      },4000)
     },
    (error)=>{
          this.msg="Customer Not Found!";
          setTimeout(()=>{
            this.router.navigate(["/admin"]);
          },2000)
    })

  }
}
