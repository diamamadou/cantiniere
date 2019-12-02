import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         // throw new Error('Method not implemented.');
      const idToken = localStorage.getItem('user_token');

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization',
            idToken)
        });

        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
    }
}
