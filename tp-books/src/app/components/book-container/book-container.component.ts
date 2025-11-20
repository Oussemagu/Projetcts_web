import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, BookListComponent, BookFormComponent,FormsModule],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  books: Book[] = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'contact@publisher.com',
      publisherPhone: '12345678',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true
    }
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  selectedBook: Book = new Book();
  isEditMode: boolean = false;

  // CREATE
  addBook(book: Book) {
    book.id = this.books.length > 0
      ? this.books[this.books.length - 1].id! + 1
      : 1;

    this.books.push({ ...book });
  }

  // DELETE
  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  // EDIT
  editBook(book: Book) {
    this.selectedBook = { ...book }; // copie pour précharger
    this.isEditMode = true;
  }

  // UPDATE
  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = { ...updatedBook };
    }
    this.isEditMode = false;
    this.selectedBook = new Book(); // reset formulaire
  }
searchText: string = '';  // pour le binding de recherche

filteredBooks(): Book[] {
  return this.books.filter(b =>
    b.title.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}
