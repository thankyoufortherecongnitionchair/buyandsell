import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../dummydata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  email: string = '';
  message: string = ''; //member vars
  listing: Listing;
  //inject mports into component
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
    this.message = `im interested in ${this.listing.name.toLowerCase()}`;
  }

  sendMessage(): void {
    alert('message sent!');
    this.router.navigateByUrl('/listings'); //go back to listings
  }
}
