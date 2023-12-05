import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../dummydata';
@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css'],
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
