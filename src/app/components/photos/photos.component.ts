import { Photo } from './../../models/photo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PhotosFacade } from 'src/app/photos.facade';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { ROUTES } from 'src/app/enums/routes';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  public photos$: Observable<Photo[]>;
  public pagination$: Observable<Pagination>;
  public currentPage = 1;
  public CONTAINER_ROUTE: string = '/' + ROUTES.HOME;

  constructor(
    private photoFacade: PhotosFacade,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params: any) =>
          iif(() => params.page, of(params.page), of(1))
        )
      )
      .subscribe((page: number) => this.loadImages(+page));

    this.pagination$ = this.photoFacade.getPagination();
    this.photos$ = this.photoFacade.getPhotos();
  }

  loadImages(page?: number): void {
    this.currentPage = page;
    this.photoFacade.loadPhotos(page).subscribe();
  }
}
