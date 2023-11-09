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
  id?:number;
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
      {
        title : this.editForm.value.title!,
        author : this.editForm.value.author!,
        price : +this.editForm.value.price!
      },
      this.id!
    ).subscribe(
      ()=> this.router.navigate(['/book'])
    )

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        console.log(parametres['id']);
        this.service.getBookById(+parametres['id']).subscribe(
          book => {
            this.id = book.id;
            this.editForm.setValue(
                  {
                    title : book!.title,
                    author : book!.author,
                    price : book!.price+''
                  }
        )
        }
        )
      }
    )
  }

}
