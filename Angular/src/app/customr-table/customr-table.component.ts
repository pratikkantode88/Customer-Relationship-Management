import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customr-table',
  templateUrl: './customr-table.component.html',
  styleUrl: './customr-table.component.css'
})
export class CustomrTableComponent implements OnInit{

  customers:Customer[]=[];

  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data)=>{
      this.customers=data;
      console.log(this.customers);
    },(error)=>{
      console.log(error);
    })
  }

}
