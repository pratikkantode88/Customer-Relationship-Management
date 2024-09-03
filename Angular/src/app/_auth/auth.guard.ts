import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { CustomerAuthService } from '../_service/customer-auth.service';
import { CustomerService } from '../customer.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate{
  
  constructor(private customerauthservice:CustomerAuthService,
              private router:Router,
              private customerservice:CustomerService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.customerauthservice.getToken()!=null){
       const role=route.data["roles"] as Array<string>;
       console.log("role : "+role);
       if(role){
          const match=this.customerservice.roleMatch(role);

          if(match){
            return true;
          }else{
            this.router.navigate(["/forbidden"]);
            return false;
          }
       }
    }
    this.router.navigate(["/login"]);
    return false;
  }
  
}

