import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-first-names',
  templateUrl: './get-all-first-names.component.html',
  styleUrl: './get-all-first-names.component.css'
})
export class GetAllFirstNamesComponent implements OnInit {
  
  firstNames:string[]=[];
  msg:string="";
  constructor(private customerService:CustomerService,
              private router:Router){}
  ngOnInit(): void {
    this.getAllFirstName();
  }

  getAllFirstName(){
     
     this.customerService.getAllFirstName().subscribe((data)=>{
      console.log(data);
      this.firstNames=data;
      
     },
    (error)=>{
          this.msg="Customer Not Found!";
          setTimeout(()=>{
            this.router.navigate(["/admin"]);
          },2000)
    })

  }
}
