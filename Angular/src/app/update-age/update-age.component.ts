import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-age',
  templateUrl: './update-age.component.html',
  styleUrl: './update-age.component.css'
})
export class UpdateAgeComponent {

  id:number=0;
  age:number=0;
  customerUpdated:string="";

  constructor(private customerService:CustomerService,
              private router:Router){}

  updateAge(){
         this.customerService.getById(this.id).subscribe((data)=>{
          
             this.customerService.updateAge(this.id,this.age).subscribe();
             
          console.log(data);
        this.customerUpdated="Customer's Age Update Successfully!";
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)

         },
    (error)=>{
      this.customerUpdated="Customer Not Found with "+this.id;
      console.log(error);
        setTimeout(()=>{
          this.router.navigate(["/admin"]);
        },2000)
    })
  }
}
