import { Component } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-mystuff',
  templateUrl: './mystuff.component.html',
  styleUrls: ['./mystuff.component.css'],
})
export class MystuffComponent {
  listings: Listing[] = [];
  constructor(private listingsservice: ListingsService) {}

  ngOnInit(): void {
    this.listingsservice
      .getListingsForUser()
      .subscribe((listings) => (this.listings = listings));
  }

  onDeleteClicked(listingid: string): void {
    this.listingsservice.deleteListing(listingid).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingid
      );
    });
  }
}
