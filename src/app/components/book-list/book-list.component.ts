import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book('Head First Design Patterns'),
    new Book('Introduction to Algorithms'),
  ];
  constructor() {}

  ngOnInit(): void {}
  onBookAdded(book: Book): void {
    this.books.push(book);
  }
}
