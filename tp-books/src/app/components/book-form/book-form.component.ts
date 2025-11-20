// book-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  searchText: string = '';  // pour le binding de recherche

  @Input() categories: string[] = [];
  @Input() book: Book = new Book();
  @Output() formSubmit = new EventEmitter<Book>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmit.emit(this.book); // envoi au parent
      form.resetForm(); // reset formulaire
      this.book = new Book(); // reset modèle
    }
  }
}
