import { Component } from '@angular/core';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service : CustomerService){}

  login(email : string, password : string){
    this.service.login(email, password);
  }

}
