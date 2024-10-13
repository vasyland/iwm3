import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Signup } from '../models/signup';
import { Buffer } from 'buffer';
import { userRegistration } from '../models/user-registration';
import { Router } from '@angular/router';
import { finalize, retry, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:8081'; // Replace with your Spring Boot API base URL
  private http = inject(HttpClient);
  private router = inject(Router);
  private _isLoggedIn: boolean = false;
  
  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
  }


  // constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<HttpResponse<any>> {
  //   const encodedCredentials = btoa(username + ':' + password);
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Basic ' + encodedCredentials
  //   });

  //   return this.http.get<any>('http://localhost:8095/sign-in', {
  //     headers: headers,
  //     observe: 'response',
  //     withCredentials: true // Ensure cookies are sent and received
  //   });
  // }

  login(username:string, password:string): Observable<HttpResponse<Signup>> {
    const encodedCredentials =  Buffer.from(username + ':' + password).toString('base64');
    const headers = new HttpHeaders({ 
      'Authorization': 'Basic ' + encodedCredentials
    });
    return this.http.get<Signup>("https://localhost:8081/login",
      {headers: headers, 
        observe: 'response' as const, 
        withCredentials: true}
      )
  }

// Last one
  // logout(): void {
   
  //   console.log("#900 Logout started...");

  //   this.http.post('https://localhost:8081/logout', {}).pipe(
  //     finalize(() => {
  //         //this.service.authenticated = false;
  //         this.router.navigateByUrl('/home');
  //     })).subscribe();
  // }

  // logoutNOtWorking(): void {
  //   console.log("Auth logout call started...");
  //   // localStorage.setItem('accessToken', '');
  //   // localStorage.setItem('userId', '');
  //   // localStorage.clear();
  //   const token = localStorage.getItem('accessToken');
  //   const headers = { 'Authorization': 'Bearer ' + token};

  //   console.log("#900 accessToken: " + token);

  //   this.http.post<any>("https://localhost:8081/logout",{},
  //     {
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //             'Authorization': `Bearer ${token}`
  //         },
  //     }
  //   ).subscribe(
  //     res => {
  //       console.log("#901 Response Data" + res);
   
  //    }
  //   );

  //   this._isLoggedIn = false;
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('userId');
  //   console.log("Auth logout call ended...");
  // }

  getCookies(): Observable<String> {
    return this.http.get<String>('https://localhost:8081/all-cookies');
  }

  logout(): void {
    
    // Call the function to get refresh token
const refreshToken = this.getCookie('refresh_token');
console.log('Refresh Token from cookie:', refreshToken);


    // const s$ =this.getCookies()
    // .pipe(shareReplay(5),
    //   retry(3));

    //   s$.subscribe(data => {
    //     console.log("Extracted Cookies: " + data);
    //   });

    console.log("Auth logout call started...");
    // localStorage.setItem('accessToken', '');
    // localStorage.setItem('userId', '');
    // localStorage.clear();
    const token = localStorage.getItem('accessToken');
    const headers = { 'Authorization': 'Bearer ' + token};

    console.log("#900 accessToken: " + token);

    this.http.post("https://localhost:8081/log-out",{},
      {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          },
      }
    ).subscribe(
      data => {
        console.log("#901 Response Data" + data);
        this.router.navigate(['/home']);
      }
    );
    this._isLoggedIn = false;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    console.log("Auth logout call ended...");
  }


  // Function to get a cookie by name
  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(nameEQ)) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  /**
   * 
   * @param email New User Registration
   * @param password 
   * @returns 
   */
  signup(email: string, password: string): Observable<HttpResponse<Signup>> {

    var prefix = this.extractEmailPrefix(email);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data: userRegistration = {
      userName: prefix,
      userEmail: email,
      userMobileNo: 'TBD',
      userPassword: password,
      userRole: 'ROLE_USER'
    };
    
    data.userEmail = email;
    data.userName = prefix;

    return this.http.post<Signup> ('https://localhost:8081/sign-up', data, {headers,
      observe: 'response' });
  }


  /**
   * Extracting user name from email
   * @param email 
   * @returns 
   */
  extractEmailPrefix(email: string) {
    if(email != null) {
      // Split the email address by '@' symbol
      var parts = email.split('@');
      // The first part (parts[0]) is the prefix before '@'
      return parts[0];
    } else {
      return '';
    }
}

// Example usage:
// var email = 'example@example.com';
// var prefix = extractEmailPrefix(email);
// console.log(prefix);  // Output: 'example'


  // login0(username: string, password: string): Observable<any> {
  //   const credentials = { username, password };
  //   return this.http.post<Signup>(`${this.baseUrl}/sign-in`, credentials);
  // }

  // Optional: Method to refresh token
  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/refresh`, null);
  }


  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}
