import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit, OnDestroy {
  books? : Book[];
  booksSubscription? : Subscription;

  constructor(private service : BookService){}


  deleteBook = (id : number)=>{
    if(confirm('Etes-vous sûre de voiloir supprimer le livre?'))
      this.service.deleteBook(id);
  }


  ngOnDestroy(): void {
    this.booksSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.service.getBooks().subscribe(
      books => this.books = books
    )
    //this.books = this.service.getBooks();
    this.booksSubscription = this.service.booksUpdatedEvent.subscribe(
      books => this.books = books
    );
  }

}
