import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PhotosApiService {
  readonly API = `https://jsonplaceholder.typicode.com`;
  pageLimit = 12;
  constructor(private http: HttpClient) {}

  getPhotos(page: number): Observable<any> {
    return this.http.get<any>(
      `${this.API}/photos?_page=${page}&_limit=${this.pageLimit}`,
      {
        observe: 'response',
      }
    );
  }
}
