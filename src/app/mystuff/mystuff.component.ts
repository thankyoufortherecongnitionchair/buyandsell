import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../dummydata';
@Component({
  selector: 'app-mystuff',
  templateUrl: './mystuff.component.html',
  styleUrls: ['./mystuff.component.css'],
})
export class MystuffComponent {
  listings: Listing[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingid: string): void {
    alert('alert! deleting your listing!');
  }
}
