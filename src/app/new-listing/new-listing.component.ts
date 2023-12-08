import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
})
export class NewListingComponent {
  constructor(private router: Router) {}

  onSubmit(): void {
    alert('creating a new listing...');
    this.router.navigateByUrl('/mystuff');
  }
}
