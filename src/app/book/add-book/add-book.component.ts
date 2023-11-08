import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addForm = this.fb.group(
    {
      title : ['', Validators.required],
      author : [''],
      price : ['']
    }
  )
  constructor(
    private fb : FormBuilder,
    private service : BookService,
    private router : Router){
  }
  addBook = ()=>{
    this.service.addBook(
      new Book(
        (this.service.getLastId() + 1),
        this.addForm.value.title!,
        this.addForm.value.author!,
        +this.addForm.value.price!
      )
    );
    this.router.navigate(['/book']);
  }


}
