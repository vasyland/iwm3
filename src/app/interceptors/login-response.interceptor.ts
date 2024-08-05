import {
  HttpResponse,
  HttpInterceptorFn,
  HttpEventType,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// export type HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>>;

export const loginResponseInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) : Observable<HttpEvent<unknown>> =>{
  return next(req).pipe(tap(event => {

    console.log("EVENT-TYPE IS: " + event.type);
    
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);

      //orig const cookies = event.headers.get('Set-Cookie');

      const intercept_cookies = event.headers.getAll('set-cookie');

      // debugger;  
      if (intercept_cookies) {
        console.log('Cookies from functional interceptor:', intercept_cookies);
        // You can handle the cookies here as needed (e.g., store in a service)
      } else {
        console.log('Cookies could not be found. Blya!!!');
      }
    }
  }));
};
 
