import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthGuardService } from '../shared/auth-guard.service';

const routes: Routes = [
  {path:'', component : ListBookComponent, canActivate : [AuthGuardService]},
  {path:'add', component: AddBookComponent, canActivate : [AuthGuardService]},
  {path:'edit/:id', component:EditBookComponent, canActivate : [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
