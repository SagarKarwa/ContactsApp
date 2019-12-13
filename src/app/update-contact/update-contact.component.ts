import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-question',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id: number;
  contact: Contact;

  constructor(private route: ActivatedRoute,private router: Router,private contactService: ContactService) { }

  ngOnInit() {
    this.contact = new Contact();

    this.id = this.route.snapshot.params['id'];

    this.contact = JSON.parse(localStorage.getItem(`${this.id}`));
    //this.contactService.getContact(this.id)
    //  .subscribe(data => {
    //    console.log(data)
        
    //  }, error => console.log(error));
  }

  updateContact() {
    this.contactService.updateContact(this.id, this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contact = new Contact();
    this.gotoList();
  }

  onSubmit() {
    this.updateContact();
  }

  gotoList() {
    setTimeout(() => {
      this.router.navigate(['/contacts']);
    }, 200 );
// this.router.navigate(['/contacts']);
  }
}
