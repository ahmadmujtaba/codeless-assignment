import { TextShortenPipe } from './custom-pipes/text-shorten.pipe';
import { PhotoState } from './state/photo.state';
import { PhotosFacade } from 'src/app/photos.facade';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/book-list/add-book/add-book.component';
import {HighlightDirective} from './custom-directives/highlight-directive';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HeaderComponent,
    PaginatorComponent,
    LoaderComponent,
    BookListComponent,
    AddBookComponent,
    TextShortenPipe,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [
    PhotosFacade,
    PhotoState,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
