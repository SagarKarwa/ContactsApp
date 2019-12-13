import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';


const routes: Routes = [

  { path: 'contacts', component: ContactListComponent},
  { path: 'contactAdd', component: CreateContactComponent },
  { path: 'update/:id', component: UpdateContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
