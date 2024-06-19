import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInterface } from '../../user.interface';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  styleUrls: ['./login.component.css'],
  providers:  [
    AuthService,
  ]
})
export class LoginComponent {
  user: UserInterface = {
    email: '',
    password: '',
  };
  showAlert = false;
  alertTitle = '';
  alertMessage = '';
  constructor(private authService: AuthService) {}

  login(form: NgForm): void {
    if (form.valid) {
      this.authService.login(this.user).subscribe(
        () =>  {
          this.showAlert = true;
          this.alertTitle = 'Error!';
          this.alertMessage = 'Incorrect email or password';
          setTimeout(() => {
            this.showAlert = false;
          }, 3000); 
        }
      );
    } 
  }
}
