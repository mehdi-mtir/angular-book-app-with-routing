import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path:'', component : ListBookComponent},
  {path:'add', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
