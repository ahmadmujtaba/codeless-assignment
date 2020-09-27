import { PhotoState } from './state/photo.state';
import { Catalog, Photo } from './models/photo.model';
import { PhotosApiService } from './api/photos-service.api';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Pagination } from './shared/models/pagination.model';

@Injectable()
export class PhotosFacade {
  constructor(
    private photoAPI: PhotosApiService,
    private photoState: PhotoState
  ) {}

  loadPhotos(page: number = 1): Observable<Catalog> {
    return this.photoAPI.getPhotos(page).pipe(
      tap((data: any) => {
        this.photoState.setPagination({
          pages: +data.headers.get('X-Total-Count') / this.photoAPI.pageLimit,
          count: data.headers.get('X-Total-Count'),
        });
        this.photoState.setPhotos(data.body);
      })
    );
  }

  getPhotos(): Observable<Photo[]> {
    return this.photoState.getPhotos();
  }

  getPagination(): Observable<Pagination> {
    return this.photoState
      .getPagination()
      .pipe(
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        )
      );
  }

  isLoading(): Subject<boolean> {
    return this.photoState.getIsLoading();
  }

  setLoading(value: boolean): void {
    this.photoState.setIsLoading(value);
  }
}
