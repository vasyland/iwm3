import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Signup } from '../../models/signup';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading: boolean = false;
  // authObs: Observable<AuthResponse>;

  credentials = {email: String, password: String};
  signupData: Signup;

  userId: string;
  username: string = '';
  password: string = '';

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  
  constructor() {}

  onFormSubmitted(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

      this.isLoading = true;
      const login$ = this.authService.login(email, password);
      login$.subscribe((response: HttpResponse<any>) => {
        this.signupData = response.body;
  
        // const headers: HttpHeaders = response.headers;
        // console.log("BODY: " + response.body);
        // console.log("REFRESH COOKIE: " + response.headers.get('refresh_token'));

        localStorage.setItem('accessToken', this.signupData.access_token);
        localStorage.setItem('userId', this.signupData.id);
  
        console.log("USER ID: " + this.signupData.id);
        // console.log("ACCEESS TOKEN: " + this.signupData.access_token);
        console.log("ACCEESS TOKEN FROM  STORAGE: " + localStorage.getItem('accessToken'));
      });
      form.reset();
      this.router.navigateByUrl('/features');
  }

  navigateToRegister() {
    this.router.navigateByUrl('/register');
  }
}


// Working Copy
  // onFormSubmitted(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;

  //   if(this.isLoginMode){
  //     this.isLoading = true;
  //     // this.authObs = this.authService.login(email, password);
  //     const login$ = this.authService.login(email, password);
  //     login$.subscribe((response: HttpResponse<any>) => {
  //       this.signupData = response.body;
  
  //       const headers: HttpHeaders = response.headers;
  //       console.log("BODY: " + response.body);
    
  //       localStorage.setItem('accessToken', this.signupData.access_token);
  //       localStorage.setItem('userId', this.signupData.id);
  
  //       console.log("USER ID: " + this.signupData.id);
  //       // console.log("ACCEESS TOKEN: " + this.signupData.access_token);
  //       console.log("ACCEESS TOKEN FROM  STORAGE: " + localStorage.getItem('accessToken'));
  //     });

  //   } else {

  //     this.isLoading = true;
  //     //this.authObs = this.authService.signup(email, password);
  //     const signup$ = this.authService.signup(email, password);

  //     signup$.subscribe((response: HttpResponse<any>) => {

  //       this.signupData = response.body;
  //       console.log("SIGN-UP USER ID: " + this.signupData.id);
  //     });
  //   }

  //   form.reset();
  // }

  // onFormSubmitted3(form: NgForm) {

  //   const email = form.value.email;
  //   const password = form.value.password;

  //   this.authService.login(email, password)
  //   .subscribe(
  //     (response: HttpResponse<any>) => {

  //       console.log("#0 REFRESH_TOKEN" + response.headers.get('Set-Cookie'));

  //       // Access cookies using optional chaining
  //       const cookies = response.headers.getAll('Set-Cookie:');

  //       // Check if cookies is not null before using it
  //       if (cookies) {
  //         console.log('Cookies from response headers:', cookies);

  //         // Process cookies as needed (e.g., store in local storage)
  //         cookies.forEach(cookie => {
  //           // Extract and store specific cookie values
  //           // Example: localStorage.setItem('accessToken', cookie);
  //         });
  //       } else {
  //         console.warn('No cookies found in response headers.');
  //       }
  //     },
  //     error => {
  //       console.error('Login failed:', error);
  //       // Handle login error (e.g., display error message)
  //     }
  //   );
  // }


  // onFormSubmitted0(form: NgForm) {
  //   this.credentials = form.value;
  //   console.log(this.credentials.email);
  //   form.reset();

  //   this.authService.login(this.username, this.password).subscribe(
  //     response => {
  //       // localStorage.setItem('accessToken', response.token); // Store token in localStorage or a more secure storage
  //       console.log('Login successful!');
  //       // Optionally, navigate to another page or perform other actions upon successful login
  //     },
  //     error => {
  //       console.error('Login error:', error);
  //       // Handle error (e.g., display error message)
  //     }
  //   );
  // }

