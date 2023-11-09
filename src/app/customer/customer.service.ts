import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = [
    {id:1, email:"customer1@gmail.com", password:"1234"}
  ];

  constructor(private router : Router){}

  login = (email : string, password : string)=>{
    const index = this.customers.findIndex(
      customer => customer.email === email && customer.password === password
    ) ;
    if(index >= 0){
      window.sessionStorage.setItem('userIndex', index+'');
      this.router.navigate(['/book']);
    }
    else{
      console.log("Paramètres incorrects");
    }
  }

  isAuthenticated = ():boolean=>{
    if(window.sessionStorage.getItem('userIndex') != null){
      return true
    }
    return false
  }

}
