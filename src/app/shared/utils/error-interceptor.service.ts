import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private errorHandlerService: ErrorHandlerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            const error = err.error.message || err.statusText;
            this.errorHandlerService.presentToast();
            return throwError(err);
        }))
    }
}
