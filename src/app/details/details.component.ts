import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Listing } from '../types';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  isLoading: boolean = true;

  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //retrieving id of each item using the angular routing

    this.listingService.getListingById(id).subscribe((listing) => {
      this.listing = listing;
      this.isLoading = false;
    });

    this.listingService
      .addViewToListings(id)
      .subscribe(() => console.log('views updated'));
  }
}
