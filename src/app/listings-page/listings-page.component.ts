import { Component } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css'],
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}
  ngOnInit(): void {
    this.listingsService
      //front end being coupled to backend!
      .getListings()
      //when getlistings call returns data, it calls this one.. and then the data calls this callback, and all varaibales are changed
      .subscribe((listings) => (this.listings = listings)); //obersvable being returned
  }
}
