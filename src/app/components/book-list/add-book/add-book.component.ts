import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() bookAdded = new EventEmitter<Book>();
  @Input() books: Book[];
  constructor() {}

  ngOnInit(): void {}

  onAddBook(): void {
    const bookName = this.nameInputRef.nativeElement.value;
    if (bookName) {
      const newBook = new Book(bookName);
      this.bookAdded.emit(newBook);
    }
  }
}
