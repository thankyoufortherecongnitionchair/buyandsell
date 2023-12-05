import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../dummydata';
import { Listing } from '../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  listing: Listing;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //retrieving id of each item using the angular routing
    this.listing = fakeListings.find(listing => listing.id === id);
  }
}
