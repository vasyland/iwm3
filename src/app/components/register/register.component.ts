import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Signup } from '../../models/signup';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isLoading: boolean = false;
  credentials = { email: String, password: String };
  signupData!: Signup;
  responseData!: Signup;
  statusCode: number = 0;

  userId: string;
  username: string = '';
  password: string = '';

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  constructor() { }

  onFormSubmitted(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    const signup$ = this.authService.signup(email, password);
      signup$.subscribe({
        next: (response: HttpResponse<Signup>) => {
          console.log('Full Response:', response);   // Full response (headers + body)
          this.signupData = response.body!;        // Extract the body (Signup)
          this.statusCode = response.status;         // Extract status code if needed
          console.log('ID:', this.signupData.id);

          localStorage.setItem('accessToken', this.signupData.access_token);
          localStorage.setItem('userId', this.signupData.id);
          this.authService.isLoggedIn = true;
        },
        error: (error) => {
          console.error('Error during signup!', error);  // Handle error
        }
      });
    // debugger;
    form.reset();
    this.router.navigateByUrl('/features');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
