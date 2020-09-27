import { Pagination } from './../shared/models/pagination.model';
import { Photo } from './../models/photo.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
@Injectable()
export class PhotoState {
  private photos: BehaviorSubject<Photo[]> = new BehaviorSubject([]);
  private pagination: Subject<Pagination> = new Subject();
  private isLoading: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  setPagination(pagination: Pagination): void {
    this.pagination.next(pagination);
  }

  getPagination(): Observable<Pagination> {
    return this.pagination.asObservable();
  }

  setPhotos(photos: Photo[]): void {
    this.photos.next(photos);
  }

  getPhotos(): Observable<Photo[]> {
    return this.photos.asObservable();
  }

  getIsLoading(): Subject<boolean> {
    return this.isLoading;
  }

  setIsLoading(value: boolean): void {
    this.isLoading.next(value);
  }
}
