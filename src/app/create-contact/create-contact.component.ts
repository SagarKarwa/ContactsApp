import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router, NavigationEnd   } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  submitted = false;

  constructor(private contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
  }

  newQuestion(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    let contactsList = [];
    if(localStorage.getItem("contactsList") != null)
        contactsList = JSON.parse(localStorage.getItem("contactsList"));
    localStorage.removeItem("contactsList");
    contactsList.push(this.contact);
    localStorage.setItem("contactsList",JSON.stringify(contactsList));
    this.contactService.createContact(this.contact)
      .subscribe(() => {
      }, error => console.log(error));
    this.contact = new Contact();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/contacts']);
    //location.reload();
  }
}
