import { Component } from '@angular/core';
import { AuthService } from './login.component.service'; // 引入 AuthService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  login(): void {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        data => {
          console.log('Login successful', data);
          // 登入成功後的處理，例如跳轉或存儲 token
        },
        error => {
          console.error('Login failed', error);
          // 登入失敗後的處理，例如顯示錯誤信息
        }
      );
    }
  }
}
