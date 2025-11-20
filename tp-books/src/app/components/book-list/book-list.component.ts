import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Book>(); // ← must be Book type

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(book: Book) {          // ← must exist
    this.edit.emit(book);
  }

  trackById(index: number, book: Book) {
  return book.id;
}

}
