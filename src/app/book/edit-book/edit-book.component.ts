import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book? : Book;
  editForm = this.fb.group(
    {
      title : ['', Validators.required],
      author : [''],
      price : ['']
    }
  )
  constructor(
    private fb : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private service : BookService,
    private router : Router){}

  editBook = ()=>{
    this.service.editBook(
      new Book(this.book!.id,
        this.editForm.value.title!,
        this.editForm.value.author!,
        +this.editForm.value.price!)
    )
    this.router.navigate(['/book']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        //console.log(parametres['id']);
        this.book = this.service.getBookById(+parametres['id']);
        this.editForm.setValue(
          {
            title : this.book!.title,
            author : this.book!.author,
            price : this.book!.price+''
          }
        )
      }
    )
  }

}
