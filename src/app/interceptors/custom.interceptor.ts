import { HttpInterceptorFn,
  HttpEventType,
  HttpEvent
 } from '@angular/common/http';
 import { tap } from 'rxjs/operators';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  // debugger;
    
  // if(req.url == "https://localhost:8081/logout") {
  //   localStorage.removeItem('accessToken');
  //   return next(req);
  // }

  if(
    req.url == "https://localhost:8081/login" || 
    req.url == "https://localhost:8081/sign-up" ||
    req.url == "https://localhost:8081/logout") {
    return next(req);
  }

  const token = localStorage.getItem('accessToken');
  console.log("#401 LocalStorage Token: " + token);

  //   /* Working with a request */
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  //return next(req);

  return next(clonedRequest);
  // return next(clonedRequest).pipe(tap(event => {
  //   // if (event.type === HttpEventType.Response) {
  //   //  const all_cookies = event.headers.getAll('Set-Cookie');
  //   //  console.log("ALL COOKIES: " + all_cookies);
  //   // } else {
  //   //   console.log('Custom Interceptor: Cookies could not be found. Blya!!!');
  //   // }
  //  }));
};
