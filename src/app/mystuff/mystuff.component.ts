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
  isLoading:boolean=true;
  constructor(private listingsservice: ListingsService) {}

  ngOnInit(): void {
    this.listingsservice
      .getListingsForUser()
      .subscribe((listings) => (this.listings = listings));
      this.isLoading=false;

  }

  onDeleteClicked(listingid: string): void {
    this.isLoading=true;
    this.listingsservice.deleteListing(listingid).subscribe(() => {
      this.listings = this.listings.filter(
        (listing) => listing.id !== listingid
      );this.isLoading=false;
      
    });
  }
}
