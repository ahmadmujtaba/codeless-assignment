import { PhotosFacade } from 'src/app/photos.facade';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public photosFacade: PhotosFacade) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.photosFacade.setLoading(true);
    return next
      .handle(req)
      .pipe(finalize(() => this.photosFacade.setLoading(false)));
  }
}
