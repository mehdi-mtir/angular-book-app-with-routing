import { Injectable } from '@angular/core';
import { Book } from '../book';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBookDTO } from '../ibook-dto';

@Injectable()
export class BookService {
  basicUrl = "http://localhost:3000";
  //booksUpdatedEvent = new Subject<Book[]>();

  constructor(private http : HttpClient) { }

  //getBooks = ():Book[] => [...this.books]
  getBooks = (): Observable<Book[]>=> {
    return this.http.get<Book[]>(`${this.basicUrl}/books`);
  }

  //getBookById = (id:number):Book|undefined =>
        //this.books.find(b=>b.id === id);

  getBookById = (id:number):Observable<Book> =>{
    return this.http.get<Book>(`${this.basicUrl}/books/${id}`);
  }
  //addBook = (book : Book) =>
        //this.books = [...this.books, book];

  addBook = (book : IBookDTO): Observable<Book> => {
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
    const bookDto = {
      title : book.title,
      author : book.author,
      price : book.price
    };
    return this.http.post<Book>(`${this.basicUrl}/books`, bookDto, options);
  }

  //editBook = (book : Book) =>
        //this.books = this.books.map(b=>(b.id === book.id)?book:b);

  editBook = (book : IBookDTO, id: number): Observable<Book> =>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
    const bookDto = {
      title : book.title,
      author : book.author,
      price : book.price
    };
    return this.http.put<Book>(`${this.basicUrl}/books/${id}`, bookDto, options);
  }


  deleteBook = (id:number): Observable<Object> =>{
    //this.books = this.books.filter(b=>b.id !== id);
    return this.http.delete<Object>(`${this.basicUrl}/books/${id}`);
    //console.log(this.books);
  }

}
