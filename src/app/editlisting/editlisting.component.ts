import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../dummydata';
@Component({
  selector: 'app-editlisting',
  templateUrl: './editlisting.component.html',
  styleUrls: ['./editlisting.component.css'],
})
export class EditlistingComponent {
  listing: Listing;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find((listing) => listing.id === id);
  }
  onSubmit(): void {
    alert('saving changes!');
    this.router.navigateByUrl('/mystuff');
  }
}
