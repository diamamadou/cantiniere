import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private http: HttpClient) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // throw new Error('Method not implemented.');
      const idToken = this.auth.getToken(); // localStorage.getItem('user_token');
      if (idToken) {
        const request = req.clone({
          headers: req.headers.set('Authorization', idToken)
          // this.http._defaultOptions.headers.append('Authorization', idToken)
        });
        /*const request = req.clone({
          responseType: 'json',
          setHeaders: {
            Authorization: `idToken`,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        });*/
        return next.handle(request);
      } else {
        return next.handle(req);
      }
    }
}