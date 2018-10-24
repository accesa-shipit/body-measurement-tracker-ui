import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  loginFailed: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
console.log(this.email);
    console.log(this.password);
    if (this.email === 'demo.trainer@accesa.eu' && this.password === '1234') {
      localStorage.setItem('isTrainer', 'true');

      this.router.navigate(['/home']);

    } else if (this.email === 'demo.employee@accesa.eu' && this.password === '1234') {
      localStorage.setItem('isTrainer', 'false');

      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
    }


  }

}
