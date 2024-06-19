import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInterface } from '../../user.interface';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./login.component.css'],
  providers:  [
    AuthService
  ]
})
export class LoginComponent {
  user: UserInterface = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  login(form: NgForm): void {
    if (form.valid) {
      this.authService.login(this.user);
    }
  }
}
