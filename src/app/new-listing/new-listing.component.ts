import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
})
export class NewListingComponent {
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) {}

  onSubmit({ name, description, price }): void {
    this.listingsService
      .createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/mystuff');
      });
  }
}
