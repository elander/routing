import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

interface Credentials {
  username: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string ='';
  theForm: FormGroup;
  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.theForm = fb.group(
      {
        'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    }
    )
   }

   login(data: Credentials): boolean {
    this.message = '';
    if(!this.auth.login(data.username, data.password)) {
      this.message = 'wrong credentials';
      setTimeout(function(this: any){
        this.message = '';
      }.bind(this), 2000);
    }
    return false;
   }

   logout(): boolean {
    this.auth.logout();
    return false;
  }

  ngOnInit(): void {
  }

}
