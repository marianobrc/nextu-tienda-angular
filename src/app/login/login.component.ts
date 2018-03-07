import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_PROVIDERS} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ROUTER_PROVIDERS]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviarForm(form){
    console.log(form);
    var success = true;
    if(success){
        this.router.navigate(['home']);
    }
  }

}
