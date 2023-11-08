import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookService } from './services/book.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListBookComponent,
    AddBookComponent,
    EditBookComponent
  ],
  providers : [BookService],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
