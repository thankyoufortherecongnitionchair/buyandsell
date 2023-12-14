import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsservice: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsservice.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.message = 'Hi, im interest in your product!';
    });
    this.message = `im interested in ${this.listing.name.toLowerCase()}`;
  }

  sendMessage(): void {
    alert('message sent!');
    this.router.navigateByUrl('/listings'); //go back to listings
  }
}
