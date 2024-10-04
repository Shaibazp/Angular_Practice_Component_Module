import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate 
{

  constructor(private router:Router){}
  public userRole:string = 'admins';
  canActivate(): boolean
  {
      if(this.userRole != 'admin')
      {
          this.router.navigate(['login'])  
      }
      return true;
  }
  
}
