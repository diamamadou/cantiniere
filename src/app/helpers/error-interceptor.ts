import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(err => {
          if (err.status === 401 || err.status === 403) {
            this.authService.logOut();
            this.router.navigate(['/login']);
          } else if (err.status === 412 && req.url.startsWith('http://localhost:8080/lunchtime/forgotpassword?')) {
            console.log(req.url);
            location.reload();
          }
          const error = err.message || err.statusText;
          return throwError(error);
        })
      );
  }
}
