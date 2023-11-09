import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
  private books : Book[] = [];
  basicUrl = "http://localhost:3000";
  booksUpdatedEvent = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  getLastId = ():number=>{
    return (this.books.length>0)?this.books[this.books.length - 1].id:0;
  }

  //getBooks = ():Book[] => [...this.books]
  getBooks = (): Observable<Book[]>=> {
    return this.http.get<Book[]>(`${this.basicUrl}/books`);
  }

  getBookById = (id:number):Book|undefined =>
        this.books.find(b=>b.id === id);

  addBook = (book : Book) =>
        this.books = [...this.books, book];

  editBook = (book : Book) =>
        this.books = this.books.map(b=>(b.id === book.id)?book:b);

  deleteBook = (id:number) =>{
    this.books = this.books.filter(b=>b.id !== id);
    this.booksUpdatedEvent.next(this.books);
    console.log(this.books);
  }

}
