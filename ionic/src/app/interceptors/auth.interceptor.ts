import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const addToken = (token: string | null) => {
      const clone = token
        ? req.clone({
            setHeaders: { Authorization: `Bearer ${token}` },
          })
        : req;
      return next.handle(clone);
    };

    return from(this.auth.getAccessToken()).pipe(
      switchMap((token) => addToken(token)),
      catchError((err: HttpErrorResponse) => {
        if (err.status === HttpStatusCode.Unauthorized) {
          return this.auth.refreshTokens().pipe(
            switchMap(() => from(this.auth.getAccessToken())),
            switchMap((token) => addToken(token)),
            catchError(() => {
              this.auth.clearTokens();
              this.router.navigate(['/login']);
              return throwError(() => err);
            })
          );
        }
        return throwError(() => err);
      })
    );
  }
}
