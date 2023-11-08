import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';

const routes: Routes = [
  {path:'', component : ListBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
