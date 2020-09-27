import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full',
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  { path: 'booklist', component: BookListComponent },

  { path: '**', redirectTo: '/photos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
