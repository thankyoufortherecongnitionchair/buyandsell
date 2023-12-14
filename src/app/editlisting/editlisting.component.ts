import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';
import { fakeListings, fakeMyListings } from '../dummydata';
@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css'],
})
export class EditlistingComponent {
  listing: Listing;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsservice: ListingsService
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsservice
      .getListingById(id)
      .subscribe((listing) => (this.listing = listing));
  }
  onSubmit({ name, description, price }): void {
    this.listingsservice
      .editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/mystuff');
      });
  }
}
