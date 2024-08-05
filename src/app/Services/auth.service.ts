import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Signup } from '../models/signup';
import { Buffer } from 'buffer';
import { userRegistration } from '../models/user-registration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:8081'; // Replace with your Spring Boot API base URL

  private http = inject(HttpClient);

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

  /**
   * 
   * @param email New User Registration
   * @param password 
   * @returns 
   */
  signup(email: string, password: string): Observable<HttpResponse<Signup>> {

    var prefix = this.extractEmailPrefix(email);

    const data: userRegistration = {
      userName: prefix,
      userEmail: email,
      userMobileNo: 'TBD',
      userPassword: password,
      userRole: 'ROLE_USER'
    };
    
    return this.http.post<HttpResponse<Signup>> ('https://localhost:8081/sign-up', data);
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
}
