import { Injectable } from '@angular/core';
import { Book } from '../book';

@Injectable()
export class BookService {
  private books : Book[] = [
    new Book(1, 'Atomic Habits', 'James Clear', 30),
    new Book(2, 'Guerre et paix', 'Tolstoi', 0),
    new Book(3, 'Problème à 3 corps', 'Liu Cixin', 20)
  ];

  constructor() { }

  getLastId = ():number=>{
    return (this.books.length>0)?this.books[this.books.length - 1].id:0;
  }

  getBooks = ():Book[]=> [...this.books];

  getBookById = (id:number):Book|undefined =>
        this.books.find(b=>b.id === id);

  addBook = (book : Book) =>
        this.books = [...this.books, book];

  editBook = (book : Book) =>
        this.books = this.books.map(b=>(b.id === book.id)?book:b);

  deleteBook = (id:number) =>
        this.books = this.books.filter(b=>b.id !== id);
}
