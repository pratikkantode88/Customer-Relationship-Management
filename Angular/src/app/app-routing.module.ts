import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomrTableComponent } from './customr-table/customr-table.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { GetByIdComponent } from './get-by-id/get-by-id.component';
import { UpdateComponent } from './update/update.component';
import { SaveComponent } from './save/save.component';
import { GetByFirstNameComponent } from './get-by-first-name/get-by-first-name.component';
import { GetByLastNameComponent } from './get-by-last-name/get-by-last-name.component';
import { GetByLessThanAgeComponent } from './get-by-less-than-age/get-by-less-than-age.component';
import { GetByGreaterThanAgeComponent } from './get-by-greater-than-age/get-by-greater-than-age.component';
import { GetByAgeComponent } from './get-by-age/get-by-age.component';
import { GetByEmailComponent } from './get-by-email/get-by-email.component';
import { UpdateFirstNameComponent } from './update-first-name/update-first-name.component';
import { UpdateLastNameComponent } from './update-last-name/update-last-name.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { UpdateAgeComponent } from './update-age/update-age.component';
import { GetAllFirstNamesComponent } from './get-all-first-names/get-all-first-names.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './_auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"home",component:HomeComponent},
  {path:"customers",component:CustomrTableComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"delete",component:DeleteCustomerComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbyid",component:GetByIdComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"update",component:UpdateComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"save",component:SaveComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbyfirstname",component:GetByFirstNameComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getBylastname",component:GetByLastNameComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbylessthanage",component:GetByLessThanAgeComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbygreaterthanage",component:GetByGreaterThanAgeComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbyage",component:GetByAgeComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getbyemail",component:GetByEmailComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"updatefirstname",component:UpdateFirstNameComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"updatelastname",component:UpdateLastNameComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"updateemail",component:UpdateEmailComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"updatemobile",component:UpdateMobileComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"updateage",component:UpdateAgeComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"getallfirstnames",component:GetAllFirstNamesComponent,canActivate:[authGuard],data:{roles:["admin"]}},
  {path:"forbidden",component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
