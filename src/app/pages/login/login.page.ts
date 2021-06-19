import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { AuthConstants } from 'src/app/config/auth.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pet: string;

  postData = {
    useremail: '',
    password: ''
    };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.pet= 'kittens';
  }

  validateInputs() {
    let useremail = this.postData.useremail.trim();
    let password = this.postData.password.trim();
    return (
    this.postData.useremail &&
    this.postData.password &&
    useremail.length > 0 &&
    password.length > 0
    );
    }

  login() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
      (res: any) => {
      if (res.userData) {
      // Storing the User data.
      this.storageService.store(AuthConstants.AUTH, res.userData);
      this.router.navigate(['home/feed']);
      } else {
      console.log('incorrect password.');
      }
      },
      (error: any) => {
      console.log('Network Issue.');
      }
      );
      } else {
      console.log('Please enter email/username or password.');
      }
  }

}
