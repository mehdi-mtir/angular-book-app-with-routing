import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books? : Book[];

  constructor(private service : BookService){}

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }

}
